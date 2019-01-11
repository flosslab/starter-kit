import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Logger } from '@modules/core/logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Credentials', 'true')
          .set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
          .set('Access-Control-Allow-Headers', 'Content-Type')
      });
    }

    // setting the accept header
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    return next.handle(request);
  }
}
