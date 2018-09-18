import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersIndexPageComponent } from './index-page/users-index-page.component';

import { AuthenticationGuardComponent } from '../../../core/authentication-guard.component';

const appRoutes: Routes = [
  { path: '', component: UsersIndexPageComponent, canActivate: [AuthenticationGuardComponent] },
];

@NgModule({ 
  declarations: [
    UsersIndexPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UsersIndexModule { }
