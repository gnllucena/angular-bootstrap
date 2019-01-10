
import { NgxMaskModule } from 'ngx-mask'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UIModule } from './../../modules/ui/.ui.module';
import { ModalsModule } from './../../modules/modals/.modals.module';
import { AuthenticationGuard } from './../../modules/core/authentication.guard';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { CommonModule, PathLocationStrategy, LocationStrategy, Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { ToastService } from '../../services/toast.service';

const appRoutes: Routes = [
  { path: '', component: UsersPageComponent, canActivate: [AuthenticationGuard] },
  { path: ':id', component: UsersPageComponent, canActivate: [AuthenticationGuard] },
  { path: '/new', component: UsersPageComponent, canActivate: [AuthenticationGuard] }
];
  
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
    ModalsModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    NgxMaskModule.forRoot()
  ],
  providers: [
    HttpService,
    ToastService,
    Location, { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class UsersModule { }
