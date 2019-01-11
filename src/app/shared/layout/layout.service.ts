import { Route, Routes } from '@angular/router';

import { LayoutComponent } from 'app/shared/layout/layout.component';
import { AuthenticationGuard } from '@modules/core/authentication/authentication.guard';

/**
 * Provides helper methods to create routes.
 */
export class Layout {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LayoutComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
