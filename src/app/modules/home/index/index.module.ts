import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';

import { AuthenticationGuardComponent } from '../../shared/authentication-guard.component';

const appRoutes: Routes = [
  { path: '', component: IndexPageComponent, canActivate: [AuthenticationGuardComponent] },
];

@NgModule({ 
  declarations: [
    IndexPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class IndexModule { }
