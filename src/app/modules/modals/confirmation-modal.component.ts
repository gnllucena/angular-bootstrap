import { Component, ViewEncapsulation, ElementRef, ViewChild, Renderer2, Input } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FadeAnimation } from '../animations/fade.animation';
import { BehaviorSubject } from 'rxjs';
import { ModalAnimation } from '../animations/modal.animation';

@Component({
  selector: 'confirmation-modal',
  template: `
    <div [@fade-transition]="(visible | async) ? 'visible' : 'hidden'" class="overlay" (click)="close()"></div>

    <div [@modal-transition]="(visible | async) ? 'visible' : 'hidden'" class="popup">
      <div class="float-left">
        <h2 class="mb-4">Confirmation of {{header}}</h2>
      </div>
      
      <div class="clearfix"></div>
    
      <div class="mb-4" [innerHTML]="content"></div>
    
      <div class="float-left">
        <button class="btn" (click)="close()">Cancel</button>
      </div>
    
      <div class="float-right">
        <button class="btn btn-primary" (click)="confirm()">Confirm</button>
      </div>
    
      <div class="clearfix"></div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: [ FadeAnimation, ModalAnimation ],
})

export class ConfirmationModalComponent {
  @ViewChild('panel') panel: ElementRef;

  @Input() header: string;
  @Input() content: string;
  @Input() callback: Function;
  
  public visible = new BehaviorSubject<Boolean>(false);
  public faTimes: IconDefinition = faTimes;

  constructor(private renderer: Renderer2) {
    this.visible.subscribe((visible: boolean) => {
      if (visible) {
        this.renderer.addClass(document.body, 'overflow');
      } else {
        this.renderer.removeClass(document.body, 'overflow'); 
      }
    });
  }

  confirm() {
    if (this.callback) {
      this.callback.call(this);
    }
    
    this.close();
  }

  close() {
    this.visible.next(false);
  }
}
