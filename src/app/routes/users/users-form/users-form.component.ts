import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
 
  public submitted = false;

  constructor() { }

  submit(): void {
    this.submitted = true;

    if (!this.form.valid) {
      return;
    }

    this.validatedEvent.emit(this.form);
  }
}
