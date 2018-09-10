import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ]
})
export class AuthenticationModule { }
