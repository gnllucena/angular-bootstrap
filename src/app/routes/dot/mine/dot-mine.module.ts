
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UIModule } from '../../../modules/ui/.ui.module';

import { AuthenticationGuard } from '../../../modules/core/authentication.guard';

import { DotMinePageComponent } from './mine-page/dot-mine-page.component';
import { DotMineListComponent } from './mine-list/dot-mine-list.component';
import { DotMineFormComponent } from './mine-form/dot-mine-form.component';
import { DotMineFilterComponent } from './mine-filter/dot-mine-filter.component';
import { DotMineEditComponent } from './mine-edit/dot-mine-edit.component';
import { DotMineAddComponent } from './mine-add/dot-mine-add.component';


const appRoutes: Routes = [
  { path: '', component: DotMinePageComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({ 
  declarations: [
    DotMinePageComponent,
    DotMineListComponent,
    DotMineFormComponent,
    DotMineFilterComponent,
    DotMineEditComponent,
    DotMineAddComponent
  ],
  imports: [
    UIModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DotMineModule { }
