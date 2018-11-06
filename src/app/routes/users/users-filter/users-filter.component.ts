import { Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'users-filter',
  templateUrl: './users-filter.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersFilterComponent {
  @Output() filterEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  
  public filters = new FormGroup({
    Name: new FormControl(),
    Email: new FormControl(),
    Document: new FormControl()
  });

  constructor() {
    this.filters.controls.Name.valueChanges.pipe(
      debounceTime(500)).subscribe(() => {
        this.filter();
      });

    this.filters.controls.Email.valueChanges.pipe(
      debounceTime(500)).subscribe(() => {
        this.filter();
      });

    this.filters.controls.Document.valueChanges.pipe(
      debounceTime(500)).subscribe(() => {
        this.filter();
      });
  }

  filter(): void {
    this.filterEvent.emit(this.filters);
  }
}
