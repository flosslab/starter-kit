import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoaderService } from '@app/shared/services/loader/loader.service';
import { LayoutComponent } from '@shared/layout/layout.component';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { FooterComponent } from '@shared/layout/footer/footer.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '@modules/core/authentication/authentication.service';
import { I18nService } from '@modules/core/i18n.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), NgbCollapseModule],
      declarations: [LayoutComponent, HeaderComponent, FooterComponent, LoaderComponent],
      providers: [LoaderService, AuthenticationService, I18nService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
