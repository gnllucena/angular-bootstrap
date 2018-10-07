import { Component } from '@angular/core';
import { RouterAnimation } from './modules/animations/route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ RouterAnimation ],
})
export class AppComponent {
  title = 'frontend';

  state(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}