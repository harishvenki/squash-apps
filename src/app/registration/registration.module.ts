import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { HeaderComponent } from './header/header.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OtpFormComponent } from './otp-form/otp-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessPageComponent } from './success-page/success-page.component';


@NgModule({
  declarations: [HeaderComponent, PersonalDetailsComponent, CompanyDetailsComponent, OtpFormComponent, SuccessPageComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    PersonalDetailsComponent,
    CompanyDetailsComponent,
    OtpFormComponent
  ]
})
export class RegistrationModule { }
