import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './index/users-index.module#UsersIndexModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/users-dashboard.module#UsersDashboardModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UsersModule { }
