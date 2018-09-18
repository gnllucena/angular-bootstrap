import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';

const appRoutes: Routes = [
  { path: '', component: IndexPageComponent },
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
