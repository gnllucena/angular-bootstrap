import { Component, ViewEncapsulation, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { OverlayAnimation } from 'src/app/modules/animations/overlay.animation';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, OverlayAnimation ],
})
export class UsersEditComponent {
  @ViewChild('panel') panel: ElementRef;
  
  public visible = new BehaviorSubject<Boolean>(false);

  constructor(private renderer: Renderer2) {
    this.visible.subscribe((visible: boolean) => {
      if (visible) {
        this.renderer.addClass(document.body, 'overflow');
        this.renderer.setProperty(this.panel.nativeElement, 'scrollTop', '0');
      } else {
        this.renderer.removeClass(document.body, 'overflow'); 
      }
    });
  }

  close() {
    this.visible.next(false);
  }
}
