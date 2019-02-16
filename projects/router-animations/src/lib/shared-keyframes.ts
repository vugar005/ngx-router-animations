import {keyframes, style, AnimationKeyframesSequenceMetadata} from '@angular/animations';
export const moveFromRightKeyframes: AnimationKeyframesSequenceMetadata =
   keyframes([
               style({ transform: 'translateX(100%)', offset: 0, 'z-index': '9999'  }),
            style({transform: 'translateX(0%)', offset: 1})
        ]);

  export const moveToLeftKeyframes: AnimationKeyframesSequenceMetadata  =
  keyframes([
           style({ transform: 'translateX(0%)', offset: 0 }),
              style({ transform: 'translateX(-100%)', opacity: '0', offset: 1 })
        ]);


     export const moveFromLeftKeyframes: AnimationKeyframesSequenceMetadata  =
   keyframes([
               style({ transform: 'translateX(-100%)', offset: 0, 'z-index': '9999' }),
            style({transform: 'translateX(0%)',  offset: 1})
        ]);

  export const moveToRightKeyframes: AnimationKeyframesSequenceMetadata  =
  keyframes([
           style({ transform: 'translateX(0%)', offset: 0 }),
              style({ transform: 'translateX(100%)', opacity: '0', offset: 1 })
        ]);

    export const moveFromTopKeyframes: AnimationKeyframesSequenceMetadata  =
    keyframes([
            style({ transform: 'translateY(-100%)', offset: 0, 'z-index': '9999'  }),
        style({transform: 'translateY(0%)',  offset: 1})
    ]);

    export const moveToBottomKeyframes: AnimationKeyframesSequenceMetadata  =
    keyframes([
           style({ transform: 'translateY(0%)', offset: 0 }),
              style({ transform: 'translateY(100%)', opacity: '0', offset: 1 })
        ]);

    export const moveFromBottomKeyframes: AnimationKeyframesSequenceMetadata  =
    keyframes([
               style({ transform: 'translateY(100%)', offset: 0, 'z-index': '9999'  }),
            style({transform: 'translateY(0%)',  offset: 1})
        ]);

     export const moveToTopKeyframes: AnimationKeyframesSequenceMetadata  =
keyframes([
           style({ transform: 'translateY(0%)', offset: 0 }),
              style({ transform: 'translateY(-100%)', opacity: '0', offset: 1 })
        ]);

   export const scaleDown: AnimationKeyframesSequenceMetadata  =
   keyframes([
          style({ opacity: '1', transform: 'scale(1)', offset: 0}),
          style({ opacity: '0', transform: 'scale(0.8)', offset: 1})
        ]);

   export const fadeFrames: AnimationKeyframesSequenceMetadata  =
    keyframes([
           style({ opacity: '1', offset: 0 }),
              style({ opacity: '0.3', offset: 1 })
        ]);
