import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <div class="row mb-2 ">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
              <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
              <li class="breadcrumb-item active">Form Elements</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class BreadcrumbComponent {

  constructor() { }
}