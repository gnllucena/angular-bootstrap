import { Component, ViewEncapsulation, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { OverlayAnimation } from '../animations/overlay.animation';
import { BehaviorSubject } from 'rxjs';
import { ModalAnimation } from '../animations/modal.animation';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ OverlayAnimation, ModalAnimation ],
})

export class ConfirmationModalComponent {
  @ViewChild('panel') panel: ElementRef;
  
  public visible = new BehaviorSubject<Boolean>(false);

  constructor(private renderer: Renderer2) {
    this.visible.subscribe((visible: boolean) => {
      if (visible) {
        this.renderer.addClass(document.body, 'overflow');
      } else {
        this.renderer.removeClass(document.body, 'overflow'); 
      }
    });
  }

  close() {
    this.visible.next(false);
  }
}
