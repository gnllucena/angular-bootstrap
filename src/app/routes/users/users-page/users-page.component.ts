import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { FormGroup } from '@angular/forms';
import { UsersAddComponent } from '../users-add/users-add.component';
import { User } from 'src/app/domain/user';
import { UsersEditComponent } from '../users-edit/users-edit.component';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent {
  @ViewChild('userFilter') userFilter: UsersFilterComponent;
  @ViewChild('userList') userList: UsersListComponent;
  @ViewChild('userAdd') userAdd: UsersAddComponent;
  @ViewChild('userEdit') userEdit: UsersEditComponent;

  constructor(
    private authenticationService: AuthenticationService) { }

  filter(filters: FormGroup): void {
    this.userList.filter(filters);
  }

  add(): void {
    this.userEdit.visible = !this.userEdit.visible;
  }

  edit(user: User): void {
    this.userEdit.visible = !this.userEdit.visible;
  }

  delete(user: User): void {
  }
}
