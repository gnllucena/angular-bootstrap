import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
              <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
              <li class="breadcrumb-item active">Form Elements</li>
            </ol>
          </div>
          <h4 class="page-title">Form Elements</h4>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class BreadcrumbComponent {

  constructor() { }
}