import { Component, ViewEncapsulation, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/domain/user';
import { Location } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { OverlayAnimation } from 'src/app/modules/animations/overlay.animation';

@Component({
  selector: 'users-add',
  templateUrl: './users-add.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, OverlayAnimation ]
})
export class UsersAddComponent {
  @ViewChild('panel') panel: ElementRef;

  public user = new BehaviorSubject<User>(null);
  public faTimes: IconDefinition = faTimes;

  constructor(private renderer: Renderer2, 
              private location: Location,
              private router: Router) {

      this.user.subscribe((user: User) => {
        if (user) {
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
    this.user.next(null);
  }
}
