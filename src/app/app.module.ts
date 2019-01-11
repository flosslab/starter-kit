import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderService } from '@app/shared/services/loader/loader.service';
import { BaseService } from '@modules/core/base/base.service';
import { AuthenticationGuard } from '@modules/core/authentication/authentication.guard';
import { AuthenticationService } from '@modules/core/authentication/authentication.service';
import { HttpService } from '@modules/core/http/http.service';
import { CoreModule } from '@modules/core/core.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    HomeModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [HttpService, BaseService, LoaderService, AuthenticationGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
