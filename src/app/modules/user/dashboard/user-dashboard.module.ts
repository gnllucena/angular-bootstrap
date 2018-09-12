import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardPageComponent } from './dashboard-page/user-dashboard-page.component';

import { AuthenticationGuardComponent } from '../../shared/authentication-guard.component';

const appRoutes: Routes = [
  { path: '', component: UserDashboardPageComponent, canActivate: [AuthenticationGuardComponent] },
];

@NgModule({ 
  declarations: [
    UserDashboardPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UserDashboardModule { }
