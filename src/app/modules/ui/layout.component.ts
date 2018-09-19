import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-layout',
  template: `
    <ng-container *ngIf="loadingService.loading | async;">  
      <div class="loading">Loading&#8230;</div>
    </ng-container>

    <ng-content></ng-content>
  `,
  styles: []
})
export class LayoutComponent {
  constructor(public loadingService: LoadingService) { }
}
