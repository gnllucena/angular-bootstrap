import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class LoginModule { }
