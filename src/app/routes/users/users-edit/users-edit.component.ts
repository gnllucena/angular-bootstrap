import { Component, ViewEncapsulation, Renderer2, ViewChild, ElementRef, Input } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { OverlayAnimation } from 'src/app/modules/animations/overlay.animation';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { Country } from 'src/app/domain/country';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DateValidation } from 'src/app/modules/validations/date.validation';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, OverlayAnimation ]
})
export class UsersEditComponent {
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
            value: this.user.Name,
            disabled: false
          }, [ Validators.required ]),
          Email: this.formBuilder.control({
            value: this.user.Email,
            disabled: false,
          }, [ Validators.required, Validators.email ]),
          Document: this.formBuilder.control({
            value: this.user.Document,
            disabled: true
          }, [ Validators.required, Validators.minLength(6) ]),
          Birthdate: this.formBuilder.control({
            value: this.user.Birthdate.toLocaleDateString(),
            disabled: false
          }, [ Validators.required, Validators.pattern(DateValidation) ]),
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

  close() {
    this.visible.next(false);
  }
}
