import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConfirmationModalComponent } from './confirmation-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  declarations: [
    ConfirmationModalComponent
  ],
  exports: [
    ConfirmationModalComponent
  ]
})
export class ModalsModule { }