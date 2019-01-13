import { animate, state, style, transition, trigger } from '@angular/animations';

export function routerTransition() {
    return slideToTop();
}

export function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({
                transform: 'translateY(20px)',
                opacity: '0'
            }),
            animate('0.3s ease', style({
                transform: 'translateY(0)',
                opacity: '1'
            }))
        ]),
        transition(':leave', [
            style({
                transform: 'translateY(0)',
                opacity: '1'
            }),
            animate('0.3s ease', style({
                transform: 'translateY(-20px)',
                opacity: '0'
            }))
        ])
    ]);
}
