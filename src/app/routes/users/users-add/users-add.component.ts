import { Component, ViewEncapsulation, Input } from '@angular/core';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';

@Component({
  selector: 'users-add',
  templateUrl: './users-add.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation ],
})
export class UsersAddComponent {
  @Input() visible: boolean;
  
  constructor() { }
}
