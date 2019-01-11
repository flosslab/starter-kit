import { TestBed } from '@angular/core/testing';
import { BaseService } from '@modules/core/base/base.service';
import { HttpHandler } from '@angular/common/http';
import { LoaderService } from '@app/shared/services/loader/loader.service';
import { HttpService } from '@modules/core/http/http.service';
import { ApiPrefixInterceptor } from '@modules/core/http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from '@modules/core/http/error-handler.interceptor';

describe('BaseService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [BaseService, HttpService, HttpHandler, ApiPrefixInterceptor, ErrorHandlerInterceptor, LoaderService]
    })
  );

  it('should be created', () => {
    const service: BaseService = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
