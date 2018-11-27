import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Country } from 'src/app/domain/country';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersFormComponent {
  @Input() form: FormGroup;
  @Input() countries: Country[] = [];
  @Input() parent: String;
  @Output() validatedEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
 
  constructor() { }

  submit(): void {
    this.validatedEvent.emit(this.form);
  }
}
