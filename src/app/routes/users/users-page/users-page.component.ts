import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, OnInit } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { FormGroup } from '@angular/forms';
import { UsersAddComponent } from '../users-add/users-add.component';
import { User } from 'src/app/domain/user';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { forkJoin } from 'rxjs';
import { Country } from 'src/app/domain/country';
import { ConfirmationModalComponent } from 'src/app/modules/modals/confirmation-modal.component';
import { ToastService } from 'src/app/services/toast.service';

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

  public countries: Country[] = [];
  public userDeleteCallback: Function;

  constructor(
    private router: Router,
    private userHttpService: HttpService<User>,
    private countryHttpService: HttpService<Country>,
    private toastService: ToastService) { }

  ngOnInit(): void {
    let list = this.userList.list(0, null);
    let countries = this.countryHttpService.list('countries');

    if (this.router.url.includes('new')) {  
      forkJoin([list, countries]).subscribe(results => {
        this.userAdd.user = new User();
        this.userAdd.countries = results[1];
        this.userAdd.visible.next(true);

        this.countries = results[1];
      });
    } else if (this.router.url.includes('users/')) {
      let id = Number(this.router.url.split('users/')[1]);

      let get = this.userHttpService.get('users', id);
      
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
    this.userList.list(0, filters);
  }

  refresh(): void {
    this.userList.list(null, null);
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
    this.userDeleteCallback = () => {
      this.userHttpService.delete('users', user.Id)
        .subscribe(() => {
          this.toastService.success('the user was successfully deleted');
        });
    }

    this.userDelete.visible.next(true);
  }
}
