import { trigger, animate, style, transition, state } from '@angular/animations';

export const ToasterAnimation = trigger('flyInOut', [
  state('inactive', 
    style({ 
      transform: 'translateX(100%)',
      opacity: '0',
    })
  ),
  state('active', 
    style({ 
      transform: 'translateX(0)',
      opacity: '1',
    })
  ),
  state('removed',
    style({ 
      transform: 'translateX(100%)',
      opacity: '0',
    })
  ),
  transition('inactive => active', [
    animate('200ms ease-out')
  ]),
  transition('active => removed', [
    animate('200ms ease-out')
  ]),
])