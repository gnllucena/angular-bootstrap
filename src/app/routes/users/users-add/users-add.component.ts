import { Component, ViewEncapsulation, Input } from '@angular/core';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'users-add',
  templateUrl: './users-add.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation ],
})
export class UsersAddComponent {
  public user = new BehaviorSubject<User>(null);
  
  constructor() { }
}
