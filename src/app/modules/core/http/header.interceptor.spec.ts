import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderInterceptor } from '@modules/core/http/header.interceptor';

describe('HeaderInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeaderInterceptor]
    })
  );

  it('should be created', () => {
    const service: HeaderInterceptor = TestBed.get(HeaderInterceptor);
    expect(service).toBeTruthy();
  });
});
