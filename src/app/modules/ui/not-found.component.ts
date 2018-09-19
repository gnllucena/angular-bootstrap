import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'not-found-page',
  template: `
    <app-header></app-header>
      <div class="container">
        These are not the droids you are looking for...
      </div>
    <app-footer></app-footer>
  `,
  styles: []
})

export class NotFoundComponent  {
  title = 'Not found';

  constructor() { }
}