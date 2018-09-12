import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './index/user-index.module#UserIndexModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/user-dashboard.module#UserDashboardModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UserModule { }
