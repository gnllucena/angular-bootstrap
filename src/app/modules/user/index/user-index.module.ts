import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserIndexPageComponent } from './index-page/user-index-page.component';

import { AuthenticationGuardComponent } from '../../shared/authentication-guard.component';

const appRoutes: Routes = [
  { path: '', component: UserIndexPageComponent, canActivate: [AuthenticationGuardComponent] },
];

@NgModule({ 
  declarations: [
    UserIndexPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UserIndexModule { }
