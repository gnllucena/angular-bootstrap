import { Component, ViewEncapsulation, Renderer2, ViewChild, ElementRef, LOCALE_ID, Inject, Output, EventEmitter } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersFormComponent } from '../users-form/users-form.component';
import { PanelAnimation } from '../../../modules/animations/panel.animation';
import { FadeAnimation } from '../../../modules/animations/fade.animation';
import { User } from '../../../domain/user';
import { Country } from '../../../domain/country';
import { HttpService } from '../../../services/http.service';
import { ToastService } from '../../../services/toast.service';
import { DateValidation } from '../../../modules/validations/date.validation';

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
    private route: ActivatedRoute,
    private userHttpService: HttpService<User>,
    private toastService: ToastService,
    @Inject(LOCALE_ID) private locale: string) {

    this.visible.subscribe((visible: Boolean) => {
      let root = this.router.url.split('?')[0].split('/')[1];

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
        this.location.go(root + '/' + this.user.Id);
      } else {
        this.renderer.removeClass(document.body, 'overflow');
        this.location.go(root);
      }
    });
  }

  submit(): void {
    this.userHttpService.put('users', this.user.Id, this.form)
      .subscribe(() => {
        this.toastService.success('the user was successfully edited');
        
        this.doneEvent.emit(true);

        this.close();
      });
  }

  close(): void {
    this.userForm.submitted = false;
    this.visible.next(false);
  }
}
