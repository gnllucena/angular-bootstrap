import { Component, ViewEncapsulation, Renderer2, ViewChild, ElementRef, Input } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PanelAnimation } from 'src/app/modules/animations/panel.animation';
import { OverlayAnimation } from 'src/app/modules/animations/overlay.animation';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ PanelAnimation, OverlayAnimation ]
})
export class UsersEditComponent {
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
          this.location.go(this.router.url + "/edit/");
        } else {
          this.renderer.removeClass(document.body, 'overflow'); 
          this.location.go(this.router.url);
        }
      });
  }

  close() {
    this.user.next(null);
  }
}
