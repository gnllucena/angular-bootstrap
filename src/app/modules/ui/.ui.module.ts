import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { NotFoundComponent } from './not-found.component';
import { SlidePanelComponent } from './slide-panel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    SlidePanelComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    SlidePanelComponent
  ]
})
export class UIModule { }