import { trigger,animate, style, transition, state } from '@angular/animations';

export const FadeAnimation = trigger('fade-transition', [
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