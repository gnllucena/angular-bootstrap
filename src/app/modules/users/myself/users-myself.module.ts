import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersMyselfPageComponent } from './myself-page/users-myself-page.component';

import { AuthenticationGuardComponent } from '../../shared/authentication-guard.component';

const appRoutes: Routes = [
  { path: '', component: UsersMyselfPageComponent, canActivate: [AuthenticationGuardComponent] },
];

@NgModule({ 
  declarations: [
    UsersMyselfPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UsersMyselfModule { }
