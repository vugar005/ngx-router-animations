import {keyframes, style} from '@angular/animations';
export const moveFromRightKeyframes =
   keyframes([
               style({ transform: 'translateX(100%)', offset: 0 }),
            style({transform: 'translateX(0%)', opacity: '1', offset: 1})
        ]);

  export const moveToLeftKeyframes =
  keyframes([
           style({ transform: 'translateX(0%)', offset: 0 }),
              style({ transform: 'translateX(-100%)', opacity: '0', offset: 1 })
        ]);


     export const moveFromLeftKeyframes =
   keyframes([
               style({ transform: 'translateX(-100%)', offset: 0 }),
            style({transform: 'translateX(0%)',  opacity: '1', offset: 1})
        ]);

  export const moveToRightKeyframes =
  keyframes([
           style({ transform: 'translateX(0%)', offset: 0 }),
              style({ transform: 'translateX(100%)', opacity: '0', offset: 1 })
        ]);

    export const moveFromTopKeyframes =
    keyframes([
            style({ transform: 'translateY(-100%)', offset: 0 }),
        style({transform: 'translateY(0%)',  opacity: '1', offset: 1})
    ]);

    export const moveToBottomKeyframes =
    keyframes([
           style({ transform: 'translateY(0%)', offset: 0 }),
              style({ transform: 'translateY(100%)', opacity: '0', offset: 1 })
        ]);

    export const moveFromBottomKeyframes =
    keyframes([
               style({ transform: 'translateY(100%)', offset: 0 }),
            style({transform: 'translateY(0%)',  opacity: '1', offset: 1})
        ]);

     export const moveToTopKeyframes =
keyframes([
           style({ transform: 'translateY(0%)', offset: 0 }),
              style({ transform: 'translateY(-100%)', opacity: '0', offset: 1 })
        ]);

   export const scaleDown =
   keyframes([
          style({ opacity: '1', transform: 'scale(1)', offset: 0}),
          style({ opacity: '0', transform: 'scale(0.8)', offset: 1})
        ]);

   export const fadeFrames =
    keyframes([
           style({ opacity: '1', offset: 0 }),
              style({ opacity: '0.3', offset: 1 })
        ]);
