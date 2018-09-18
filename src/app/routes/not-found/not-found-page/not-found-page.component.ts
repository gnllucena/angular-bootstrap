import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class NotFoundPageComponent  {
  title = 'Not found';

  constructor() { }
}