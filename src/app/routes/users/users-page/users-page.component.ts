import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, OnInit } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { FormGroup } from '@angular/forms';
import { UsersAddComponent } from '../users-add/users-add.component';
import { User } from 'src/app/domain/user';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { ConfirmationModalComponent } from 'src/app/modules/modals/confirmation-modal.component';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent implements OnInit {
  @ViewChild('userFilter') userFilter: UsersFilterComponent;
  @ViewChild('userList') userList: UsersListComponent;
  @ViewChild('userAdd') userAdd: UsersAddComponent;
  @ViewChild('userEdit') userEdit: UsersEditComponent;
  @ViewChild('userDelete') userDelete: ConfirmationModalComponent;

  constructor(
    private router: Router,
    private httpService: HttpService<User>) { }

  ngOnInit(): void {
    if (this.router.url.includes('users/')) {
      let get = this.httpService.get('users', 1);
      let list = this.userList.list(0, 10, null);

      forkJoin([get, list]).subscribe(results => {
        this.userEdit.user.next(results[0]);
      });
    } else if (this.router.url.includes('new')) {
      this.userAdd.user.next(new User());
    } else {
      this.userList.list(0, 10, null);
    }
  }

  filter(filters: FormGroup): void {
    this.userList.list(0, 10, filters);
  }

  add(): void {
    this.userAdd.user.next(new User());
  }

  edit(user: User): void {
    this.userEdit.user.next(user);
  }

  delete(user: User): void {
    this.userDelete.visible.next(true);
  }

  applyAdd(user: User): void {

  }

  applyEdit(user: User): void {

  }

  applyDelete(user: User): void {

  }
}
