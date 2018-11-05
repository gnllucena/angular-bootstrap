import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class UIModule { }