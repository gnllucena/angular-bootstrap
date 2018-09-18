import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './index/users-index.module#UsersIndexModule'
  },
  {
    path: ':username',
    loadChildren: './myself/users-myself.module#UsersMyselfModule'
  }
];

// users-add -> users.form
// [{
//   path: 'team/:id',
//  component: Team,
//   children: [{
//     path: 'user/:name',
//     component: User
//   }]
// }]

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class UsersModule { }
