import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';

type PaneType = 'left' | 'right';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent {
  title = 'Users';
  
  @Input() activePane: PaneType = 'left';

  public isLeftVisible = true;
  
  constructor(
    private authenticationService: AuthenticationService) { }
}
