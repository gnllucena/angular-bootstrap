import { Component, ViewEncapsulation } from '@angular/core';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { OverlayAnimation } from 'src/app/modules/animations/overlay.animation';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, OverlayAnimation ],
})
export class UsersEditComponent {
  public visible: boolean;

  close() {
    this.visible = false;
  }
}
