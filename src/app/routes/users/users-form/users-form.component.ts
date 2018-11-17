import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersFormComponent {
  @Input() user: User;
  @Output() validatedEvent: EventEmitter<User> = new EventEmitter<User>();
  
  countries = ['USA', 'Germany', 'Italy', 'France'];

  public filters = new FormGroup({
    Name: new FormControl(),
    Email: new FormControl(),
    Document: new FormControl(),
    Birthdate: new FormControl(),
    Country: new FormControl(),
    Profile: new FormControl(),
    Active: new FormControl()
  });

  constructor() { }

  submit(): void {
    this.validatedEvent.emit(this.user);
  }
}
