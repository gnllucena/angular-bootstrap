import { Component, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Country } from '../../../domain/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'users-filter',
  templateUrl: './users-filter.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersFilterComponent  {
  @Input() countries: Country[] = [];
  @Output() filterEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() addEvent: EventEmitter<void> = new EventEmitter<void>();
  
  public filters = new FormGroup({
    Name: new FormControl(),
    Email: new FormControl(),
    Country: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute
  ) {
    this.filters.controls.Name.valueChanges.pipe(
      debounceTime(500)).subscribe(() => {
        this.filter();
      });

    this.filters.controls.Email.valueChanges.pipe(
      debounceTime(500)).subscribe(() => {
        this.filter();
      });

    this.filters.controls.Country.valueChanges.pipe(
      debounceTime(500)).subscribe(() => {
        this.filter();
      });

    this.route.queryParamMap.subscribe(queryParams => {
      let country = queryParams.get("country");

      if (country) {
        this.filters.controls.Country.setValue(country);
      }
    })
  }

  filter(): void {
    this.filterEvent.emit(this.filters);
  }
  
  add(): void {
    this.addEvent.emit();
  }
}
