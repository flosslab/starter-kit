import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderComponent } from '@shared/components/loader/loader.component';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { LayoutComponent } from '@shared/layout/layout.component';
import { FooterComponent } from '@shared/layout/footer/footer.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule],
  declarations: [HeaderComponent, LayoutComponent, FooterComponent, LoaderComponent]
})
export class LayoutModule {}
