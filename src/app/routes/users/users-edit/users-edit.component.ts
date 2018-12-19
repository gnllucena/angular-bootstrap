import { Component, ViewEncapsulation, Renderer2, ViewChild, ElementRef, LOCALE_ID, Inject, Output, EventEmitter } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { FadeAnimation } from 'src/app/modules/animations/fade.animation';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { Country } from 'src/app/domain/country';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateValidation } from 'src/app/modules/validations/date.validation';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, FadeAnimation ]
})
export class UsersEditComponent {
  @ViewChild('panel') panel: ElementRef;
  @ViewChild('userForm') userForm: UsersFormComponent;

  @Output() doneEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public visible = new BehaviorSubject<Boolean>(false);
  public form: FormGroup;
  public user: User = new User;
  public countries: Country[] = [];
  public faTimes: IconDefinition = faTimes;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private location: Location,
    private router: Router,
    private userHttpService: HttpService<User>,
    private toastService: ToastService,
    @Inject(LOCALE_ID) private locale: string) {

    this.visible.subscribe((visible: Boolean) => {
      if (visible) {
        this.form = this.formBuilder.group({
          Name: this.formBuilder.control({
            value: this.user.Name,
            disabled: false
          }, [ Validators.required, Validators.maxLength(30) ]),
          Email: this.formBuilder.control({
            value: this.user.Email,
            disabled: false,
          }, [ Validators.required, Validators.email, Validators.maxLength(30) ]),
          Document: this.formBuilder.control({
            value: this.user.Document,
            disabled: true
          }),
          Birthdate: this.formBuilder.control({
            value: this.user.Birthdate.toLocaleDateString(locale),
            disabled: false
          }, [ Validators.required, DateValidation ]),
          Country: this.formBuilder.control({
            value: this.user.Country,
            disabled: false
          }, [ Validators.required ]),
          Profile: this.formBuilder.control({
            value: this.user.Profile,
            disabled: false
          }, [ Validators.required ]),
          Active: this.formBuilder.control({
            value: this.user.Active,
            disabled: false
          }),
        });

        this.renderer.addClass(document.body, 'overflow');
        this.renderer.setProperty(this.panel.nativeElement, 'scrollTop', '0');
        this.location.go(this.router.url.split('/')[1] + '/' + this.user.Id);
      } else {
        this.renderer.removeClass(document.body, 'overflow');
        this.location.go(this.router.url.split('/')[1]);
      }
    });
  }

  submit() {
    this.userHttpService.put('users', this.user.Id, this.form)
      .subscribe(() => {
        this.toastService.success('the user was successfully edited');
        
        this.doneEvent.emit(true);

        this.close();
      });
  }

  close() {
    this.userForm.submitted = false;
    this.visible.next(false);
  }
}
