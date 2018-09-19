
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UIModule } from '../../../modules/ui/.ui.module';

import { AuthenticationGuard } from '../../../modules/core/authentication.guard';

import { DotUsersPageComponent } from './users-page/dot-users-page.component';
import { DotUsersListComponent } from './users-list/dot-users-list.component';
import { DotUsersFormComponent } from './users-form/dot-users-form.component';
import { DotUsersFilterComponent } from './users-filter/dot-users-filter.component';
import { DotUsersEditComponent } from './users-edit/dot-users-edit.component';
import { DotUsersAddComponent } from './users-add/dot-users-add.component';


const appRoutes: Routes = [
  { path: '', component: DotUsersPageComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({ 
  declarations: [
    DotUsersPageComponent,
    DotUsersListComponent,
    DotUsersFormComponent,
    DotUsersFilterComponent,
    DotUsersEditComponent,
    DotUsersAddComponent
  ],
  imports: [
    UIModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DotUsersModule { }
