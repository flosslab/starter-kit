import { TestBed } from '@angular/core/testing';

import { Layout } from './layout.service';
import { AuthenticationGuard } from '@modules/core/authentication/authentication.guard';
import { AuthenticationService } from '@modules/core/authentication/authentication.service';
import { MockAuthenticationService } from '@modules/core/authentication/authentication.service.mock';
import { LayoutComponent } from '@shared/layout/layout.component';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { FooterComponent } from '@shared/layout/footer/footer.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

describe('Layout', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponent, FooterComponent, LoaderComponent],
      providers: [AuthenticationGuard, { provide: AuthenticationService, useClass: MockAuthenticationService }]
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of layout', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = Layout.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(LayoutComponent);
    });
  });
});
