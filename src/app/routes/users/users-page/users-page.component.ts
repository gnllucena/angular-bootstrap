import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { FormGroup } from '@angular/forms';
import { UsersAddComponent } from '../users-add/users-add.component';

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
  @ViewChild('userAdd') userAdd: UsersAddComponent;

  public add = false;
  public edit = false;
  
  constructor(
    private authenticationService: AuthenticationService) { }

  filter(filters: FormGroup) {
    this.userList.filter(filters);
  }
}
