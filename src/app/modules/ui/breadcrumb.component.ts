import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <div class="small mb-4">
      <a href="javascript: void(0);">home</a> > 
      <a href="javascript: void(0);">users</a>
    </div>
  `,
  styles: []
})
export class BreadcrumbComponent {

  constructor() { }
}