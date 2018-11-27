import { Component, ViewEncapsulation, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/domain/user';
import { Location } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { OverlayAnimation } from 'src/app/modules/animations/overlay.animation';
import { Country } from 'src/app/domain/country';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateValidation } from 'src/app/modules/validations/date.validation';

@Component({
  selector: 'users-add',
  templateUrl: './users-add.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, OverlayAnimation ]
})
export class UsersAddComponent {
  @ViewChild('panel') panel: ElementRef;
  
  public visible = new BehaviorSubject<Boolean>(false);
  public form: FormGroup;
  public user: User = new User;
  public countries: Country[] = [];
  public faTimes: IconDefinition = faTimes;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2, 
    private location: Location,
    private router: Router) {

    this.visible.subscribe((visible: Boolean) => {
      if (visible) {
        this.form = this.formBuilder.group({
          Name: this.formBuilder.control({
            value: '',
            disabled: false
          }, [ Validators.required ]),
          Email: this.formBuilder.control({
            value: '',
            disabled: false,
          }, [ Validators.required, Validators.email ]),
          Document: this.formBuilder.control({
            value: '',
            disabled: false
          }, [ Validators.required, Validators.minLength(6) ]),
          Birthdate: this.formBuilder.control({
            value: '',
            disabled: false
          }, [ Validators.required, Validators.pattern(DateValidation) ]),
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

  close() {
    this.visible.next(false);
  }
}
