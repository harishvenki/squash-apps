import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  {
    path: 'success-page',
    component: SuccessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
