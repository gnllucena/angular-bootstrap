import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersDashboardPageComponent } from './dashboard-page/users-dashboard-page.component';

import { AuthenticationGuardComponent } from '../../shared/authentication-guard.component';

const appRoutes: Routes = [
  { path: '', component: UsersDashboardPageComponent, canActivate: [AuthenticationGuardComponent] },
];

@NgModule({ 
  declarations: [
    UsersDashboardPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UsersDashboardModule { }
