import { Component, ViewEncapsulation, Renderer2, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersFormComponent } from '../users-form/users-form.component';
import { PanelAnimation } from '../../../modules/animations/panel.animation';
import { FadeAnimation } from '../../../modules/animations/fade.animation';
import { User } from '../../../domain/user';
import { Country } from '../../../domain/country';
import { HttpService } from '../../../services/http.service';
import { ToastService } from '../../../services/toast.service';
import { CpfValidation } from '../../../modules/validations/cpf.validation';
import { DateValidation } from '../../../modules/validations/date.validation';

@Component({
  selector: 'users-add',
  templateUrl: './users-add.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, FadeAnimation ]
})
export class UsersAddComponent {
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
    private toastService: ToastService) {

    this.visible.subscribe((visible: Boolean) => {
      if (visible) {
        this.form = this.formBuilder.group({
          Name: this.formBuilder.control({
            value: '',
            disabled: false
          }, [ Validators.required, Validators.maxLength(30) ]),
          Email: this.formBuilder.control({
            value: '',
            disabled: false,
          }, [ Validators.required, Validators.email, Validators.maxLength(30) ]),
          Document: this.formBuilder.control({
            value: '',
            disabled: false
          }, [ Validators.required, CpfValidation ]),
          Birthdate: this.formBuilder.control({
            value: '',
            disabled: false
          }, [ Validators.required, DateValidation ]),
          Country: this.formBuilder.control({
            value: '',
            disabled: false
          }, [ Validators.required ]),
          Profile: this.formBuilder.control({
            value: 'Regular',
            disabled: false
          }, [ Validators.required ]),
          Active: this.formBuilder.control({
            value: true,
            disabled: false
          }),
        });

        this.renderer.addClass(document.body, 'overflow');
        this.renderer.setProperty(this.panel.nativeElement, 'scrollTop', '0');
        this.location.go(this.router.url.split('?')[0] + '/new');
      } else {
        this.renderer.removeClass(document.body, 'overflow'); 
        this.location.go(this.router.url.split('?')[0]);
      }
    });
  }

  submit(): void {
    this.userHttpService.post('users', this.form)
      .subscribe(() => {
        this.toastService.success('the user was successfully added');
        
        this.doneEvent.emit(true);

        this.close();
      });
  }

  close(): void {
    this.userForm.submitted = false;
    this.visible.next(false);
  }
}
