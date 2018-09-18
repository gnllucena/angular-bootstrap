import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const appRoutes: Routes = [
  { path: '', component: NotFoundPageComponent },
];

@NgModule({
  declarations: [
    NotFoundPageComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class NotFoundModule { }
