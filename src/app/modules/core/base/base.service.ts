import { Injectable } from '@angular/core';
import { LoaderService } from '@app/shared/services/loader/loader.service';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { HttpService } from '@modules/core/http/http.service';
import { CustomErrorHandlerService } from '@modules/core/base/custom-error-handler.service';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { Logger } from '@modules/core/logger.service';

const log = new Logger('BaseService');

@Injectable()
export class BaseService {
  private http_auth: string;
  private uniq_id_counter = 0;
  private shouldManageSessionId = false; // try without first

  constructor(
    public httpService: HttpService,
    public errorHandler: CustomErrorHandlerService,
    public loaderService: LoaderService
  ) {}

  get(url: string) {
    this.loaderService.show();
    return this.httpService.get(url).pipe(
      map((res: any) => {
        return this.handleResponse(res);
      }),
      catchError((error: any) => throwError(error)),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }

  post(url: string, body: any, params: any) {
    this.loaderService.show();
    const options = {
      params: params
    };
    return this.httpService.post(url, body, options).pipe(
      map((res: any) => {
        return this.handleResponse(res);
      }),
      catchError((error: any) => throwError(error)),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }

  upload(url: string, file: File) {
    const options = {};
    options['reportProgress'] = true;

    const formData: FormData = new FormData();
    formData.append('file', file);

    const request = new HttpRequest('POST', url, formData, options);
    this.loaderService.show();
    return this.httpService
      .disableDefaultHeader()
      .post(url, formData, options)
      .pipe(
        map((res: any) => {
          return this.handleResponse(res);
        }),
        catchError((error: any) => throwError(error)),
        finalize(() => {
          this.loaderService.hide();
        })
      );
  }

  download(url: string) {
    const options = {};
    options['reportProgress'] = false;

    const headers = new HttpHeaders();
    headers.set('Accept', 'text/plain');

    options['headers'] = headers;

    this.loaderService.show();
    return this.httpService.get(url, options).pipe(
      map((res: any) => {
        return this.handleResponse(res);
      }),
      catchError((error: any) => throwError(error)),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }

  public sendRpcRequest(url: string, params: Object, method: string = 'call'): Observable<any> {
    this.loaderService.show();

    const body = this.buildRequest(url, params, method);
    return this.httpService.post(url, body, {}).pipe(
      map((response: any) => {
        log.debug('sendRpcRequest res =>');
        log.debug(response);
        return this.handleResponse(response);
      }),
      catchError((error: any) => throwError(error)),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }

  private handleResponse(response: any): any {
    if (response.error !== undefined) {
      log.error('Error!', response.error);
    } else {
      return response.result;
    }
  }

  private buildRequest(url: string, params: any, method: string) {
    this.uniq_id_counter += 1;
    return JSON.stringify({
      id: this.uniq_id_counter,
      jsonrpc: '2.0',
      method: method,
      params: params
    });
  }
}
