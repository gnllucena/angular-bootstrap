import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '../../modules/ui/.ui.module';

export const appRoutes: Routes = [
  {
    path: ':username',
    loadChildren: './myself/dot-myself.module#DotMyselfModule'
  }
];

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DotModule { }
