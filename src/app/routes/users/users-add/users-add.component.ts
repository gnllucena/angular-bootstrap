import { Component, ViewEncapsulation, Input, Renderer2, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/domain/user';
import { Location } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FadeAnimation } from 'src/app/modules/animations/fade.animation';
import { Country } from 'src/app/domain/country';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateValidation } from 'src/app/modules/validations/date.validation';
import { CpfValidation } from 'src/app/modules/validations/cpf.validation';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsersFormComponent } from '../users-form/users-form.component';

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
    private httpService: HttpService<User>,
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
        this.location.go(this.router.url.split('/')[1] + '/new');
      } else {
        this.renderer.removeClass(document.body, 'overflow'); 
        this.location.go(this.router.url.split('/')[1]);
      }
    });
  }

  submit() {
    this.httpService.post('users', this.form)
      .subscribe(() => {
        this.toastService.success('the user was successfully added');
        
        this.doneEvent.emit(true);
        
        this.close();
      });
  }

  close() {
    this.userForm.submitted = false;
    this.visible.next(false);
  }
}
