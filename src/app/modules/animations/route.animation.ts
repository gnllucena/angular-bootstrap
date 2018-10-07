import { trigger,animate, style, query, transition, keyframes } from '@angular/animations';

export const RouterAnimation = trigger('route-transition', [
  transition( '* => *', [
    query(':enter', 
      [
        style({ opacity: 0 })
      ], 
      { optional: true }
    ),
    query(':leave', 
      [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 }))
      ], 
      { optional: true }
    ),
    query(':enter', 
      [
        style({ opacity: 0 }),
        animate(
          '0.2s 0s',
          keyframes([
            style({
              opacity: 0,
              transform: 'translate3d(0, -5%, 0)',
              offset: 0
            }),
            style({
              opacity: 1,
              transform: 'translate3d(0, 0, 0)',
              offset: 1
            })
          ])
        )
      ], 
      { optional: true }
    )
  ])
]);