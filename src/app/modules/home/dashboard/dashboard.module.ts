import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

import { AuthenticationGuardComponent } from '../../shared/authentication-guard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardPageComponent, canActivate: [AuthenticationGuardComponent] },
];

@NgModule({ 
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class DashboardModule { }
