import { trigger,animate, style, query, transition, stagger, keyframes, state } from '@angular/animations';

export const OverlayAnimation = trigger('overlay-transition', [
  state('hidden',
    style({
      zIndex: '-1',
      opacity: '0',
    })
  ),
  state('visible', 
    style({ 
      zIndex: '9',
      opacity: '1',
    })
  ),
  transition('* => visible', [
    animate('500ms')
  ]),
  transition('visible => hidden', [
    animate('500ms')
  ]) 
]);