
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UIModule } from './../../modules/ui/.ui.module';

import { AuthenticationGuard } from './../../modules/core/authentication.guard';

import { UsersPageComponent } from './users-page/users-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersAddComponent } from './users-add/users-add.component';

const appRoutes: Routes = [
  { path: '', component: UsersPageComponent, canActivate: [AuthenticationGuard] },
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
  declarations: [
    UsersPageComponent,
    UsersListComponent,
    UsersFormComponent,
    UsersFilterComponent,
    UsersEditComponent,
    UsersAddComponent
  ],
  imports: [
    UIModule,
    FontAwesomeModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class UsersModule { }
