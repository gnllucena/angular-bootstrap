import {trigger, animate, style, transition, state} from '@angular/animations';

export const PanelAnimation = trigger('panel-transition', [
  state('hidden',
    style({ 
      transform: 'translateX(100%)',
      opacity: '0',
    })
  ),
  state('visible', 
    style({ 
      transform: 'translateX(0)',
      opacity: '1',
    })
  ),
  transition('* => visible', [
    animate('200ms ease-out')
  ]),
  transition('visible => hidden', [
    animate('200ms ease-out')
  ])
])