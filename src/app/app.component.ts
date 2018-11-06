import { Component } from '@angular/core';
import { RouterAnimation } from './modules/animations/route.animation';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ RouterAnimation ],
})
export class AppComponent {
  constructor(public loadingService: LoadingService) { }

  state(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}