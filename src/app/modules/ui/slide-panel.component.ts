import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SlidePanelAnimation } from './../animations/slide-panel.animation';

type PaneType = 'left' | 'right';

@Component({
  selector: 'slide-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ SlidePanelAnimation ],
  template: `
    <div class="panes" [@slide-transition]="activePane">
      <div>
        <ng-content select="[left-panel]"></ng-content>
      </div>
      <div>
        <ng-content select="[right-panel]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      overflow: hidden;
    }
    
    .panes {
      height: 100%;
      width: 200%;
      display: flex;      
    }

    .panes div {
      flex: 1
    }
  `]
})
export class SlidePanelComponent {  
    @Input() activePane: PaneType = 'left';
}
