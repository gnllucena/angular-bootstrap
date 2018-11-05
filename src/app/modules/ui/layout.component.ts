import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>

    <ng-content></ng-content>
  `
})
export class LayoutComponent { }
