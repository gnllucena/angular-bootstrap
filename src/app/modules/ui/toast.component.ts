import { Component } from '@angular/core';
import { ToastrService, ToastPackage, Toast } from 'ngx-toastr';
import { ToasterAnimation } from '../animations/toaster.animation';

@Component({
  selector: '[toast-component]',
  template: `
    <div class="row" [style.display]="state.value === 'inactive' ? 'none' : ''">
      <div class="col-9">
        <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
          {{ title }}
        </div>
        <div *ngIf="message && options.enableHtml" role="alert" aria-live="polite"
          [class]="options.messageClass" [innerHTML]="message">
        </div>
        <div *ngIf="message && !options.enableHtml" role="alert" aria-live="polite"
          [class]="options.messageClass" [attr.aria-label]="message">
          {{ message }}
        </div>
      </div>
      <div class="col-3 text-right">
        <a *ngIf="options.closeButton" (click)="remove()" class="btn btn-pink btn-sm">
          close
        </a>
      </div>
    </div>
    <div *ngIf="options.progressBar">
      <div class="toast-progress" [style.width]="width + '%'"></div>
    </div>
  `,
  animations: [ ToasterAnimation ],
  preserveWhitespaces: false,
})
export class ToastComponent extends Toast {
  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  action(event: Event) {
    event.stopPropagation();
    
    this.toastPackage.triggerAction();

    return false;
  }
}