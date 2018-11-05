import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { FormGroup } from '@angular/forms';
import { UsersAddComponent } from '../users-add/users-add.component';
import { User } from 'src/app/domain/user';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { ConfirmationModalComponent } from 'src/app/modules/modals/confirmation-modal.component';

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
  @ViewChild('userDelete') userDelete: ConfirmationModalComponent;

  filter(filters: FormGroup): void {
    this.userList.list(0, 10, filters);
  }

  add(): void {
    this.userEdit.visible.next(true);
  }

  edit(user: User): void {
    this.userEdit.visible.next(true);
  }

  delete(user: User): void {
    this.userDelete.visible.next(true);
  }

  applyAdd() {

  }

  applyEdit() {

  }

  applyDelete() {

  }
}
