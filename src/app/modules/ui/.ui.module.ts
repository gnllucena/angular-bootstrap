import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { NotFoundComponent } from './not-found.component';
import { PaginationComponent } from './pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationInformationComponent } from './pagination-information.component';

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent,
    NotFoundComponent,
    PaginationComponent,
    PaginationInformationComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PaginationComponent,
    PaginationInformationComponent
  ]
})
export class UIModule { }