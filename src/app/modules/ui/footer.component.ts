import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar navbar-dark bg-dark mt-5 fixed-bottom">
      <div class="navbar-expand m-auto navbar-text">
        <a href="mailto:gnllucena@gmail.com">gnllucena@gmail.com</a>
      </div>
    </nav>
  `,
  styles: []
})
export class FooterComponent {

  constructor() { }
}
