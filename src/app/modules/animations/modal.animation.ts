import { trigger, animate, style, transition, state } from '@angular/animations';

export const ModalAnimation = trigger('modal-transition', [
  state('hidden',
    style({ 
      transform: 'translateY(100%)',
      opacity: '0',
    })
  ),
  state('visible', 
    style({ 
      transform: 'translateY(0)',
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