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
import { Country } from 'src/app/domain/country';

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
  // @ViewChild('userDelete') userDelete: ConfirmationModalComponent;

  public countries: Country[] = [];

  constructor(
    private router: Router,
    private userService: HttpService<User>,
    private countryService: HttpService<Country>,) { }

  ngOnInit(): void {
    let list = this.userList.list(0, 10, null);
    let countries = this.countryService.list('countries');

    if (this.router.url.includes('new')) {  
      forkJoin([list, countries]).subscribe(results => {
        this.userAdd.user = new User();
        this.userAdd.countries = results[1];
        this.userAdd.visible.next(true);

        this.countries = results[1];
      });
    } else if (this.router.url.includes('users/')) {
      let id = Number(this.router.url.split('users/')[1]);

      let get = this.userService.get('users', id);
      
      forkJoin([list, countries, get]).subscribe(results => {
        this.userEdit.user = results[2];
        this.userEdit.countries = results[1];
        this.userEdit.visible.next(true);

        this.countries = results[1];
      });
    } else {
      forkJoin([list, countries]).subscribe(results => {
        this.countries = results[1];
      });
    }
  }

  filter(filters: FormGroup): void {
    this.userList.list(0, 10, filters);
  }

  add(): void {
    this.userAdd.user = new User();
    this.userAdd.countries = this.countries;
    this.userAdd.visible.next(true);
  }

  edit(user: User): void {
    this.userEdit.user = user;
    this.userEdit.countries = this.countries;
    this.userEdit.visible.next(true);
  }

  delete(user: User): void {
    // this.userDelete.visible.next(true);
  }

  applyAdd(user: User): void {

  }

  applyEdit(user: User): void {

  }

  applyDelete(user: User): void {

  }
}
