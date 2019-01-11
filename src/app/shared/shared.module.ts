import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '@shared/services/loader/loader.service';
import { LayoutModule } from '@shared/layout/layout.module';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [],
  providers: [LoaderService],
  exports: []
})
export class SharedModule {}
