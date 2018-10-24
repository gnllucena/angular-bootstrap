import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { FormGroup } from '@angular/forms';

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
  @ViewChild('userFilter') userFilter: UsersFilterComponent;
  @ViewChild('userList') userList: UsersListComponent;
  
  public isLeftVisible = true;
  
  constructor(
    private authenticationService: AuthenticationService) { }

    filter(filters: FormGroup) {
      this.userList.filter(filters);
    }
}
