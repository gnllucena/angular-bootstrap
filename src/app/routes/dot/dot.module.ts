import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '../../modules/ui/.ui.module';
import { DotService } from './dot.service';

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
  ],
  providers: [
    DotService
  ]
})
export class DotModule { }
