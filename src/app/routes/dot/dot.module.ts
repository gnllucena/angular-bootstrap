import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '../../modules/ui/.ui.module';

export const appRoutes: Routes = [
  {
    path: ':username/users',
    loadChildren: './users/dot-users.module#DotUsersModule'
  },
  {
    path: ':username',
    loadChildren: './myself/dot-myself.module#DotMyselfModule'
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
    UIModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DotModule { }
