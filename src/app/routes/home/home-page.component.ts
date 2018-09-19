import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class HomePageComponent {
  title = 'localhost';

  constructor() { }
}
