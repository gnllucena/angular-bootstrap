import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { IdentityPageComponent } from './identity-page/identity-page.component';
import { UIModule } from '../../modules/ui/.ui.module';

const appRoutes: Routes = [
  { path: '', component: IdentityPageComponent },
];

@NgModule({
  declarations: [
    IdentityPageComponent,
  ],
  imports: [
    UIModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class IdentityModule { }
