import { trigger,animate, style, query, transition, stagger, keyframes } from '@angular/animations';

export const ListAnimation = trigger('list-transition', [
  transition('* <=> *', [
    query(':enter',
      [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        stagger(
          '120ms',
          animate('550ms ease-out',
            style({ 
              opacity: 1, 
              transform: 'translateY(0px)' 
            })
          )
        )
      ],
      { optional: true }
    ),
    query(':leave', 
      [
        style({ opacity: 1 }),
        animate('0.5s', style({ opacity: 0 }))
      ],
      { optional: true}
    ) 
  ])
]);