import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DotMyselfPageComponent } from './myself-page/dot-myself-page.component';

import { AuthenticationGuard } from '../../../modules/core/authentication.guard';
import { UIModule } from '../../../modules/ui/.ui.module';

const appRoutes: Routes = [
  { path: '', component: DotMyselfPageComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({ 
  declarations: [
    DotMyselfPageComponent,
  ],
  imports: [
    UIModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DotMyselfModule { }
