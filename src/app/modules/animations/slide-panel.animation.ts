import {trigger, animate, style, transition, state} from '@angular/animations';

export const SlidePanelAnimation = trigger('slide-transition', [
  state('left', style({ 
    transform: 'translateX(0)' 
  })),
  state('right', style({ 
    transform: 'translateX(-50%)' 
  })),
  transition('* => *', animate(300))
])