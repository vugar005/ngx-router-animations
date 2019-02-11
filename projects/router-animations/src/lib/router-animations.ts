import {animate, style, group, query, keyframes, animation} from '@angular/animations';
import {sharedStyles} from './utils';
import {
 moveToLeftKeyframes,
  moveFromRightKeyframes,
 moveFromLeftKeyframes,
 moveToRightKeyframes,
  moveFromTopKeyframes,
 moveToBottomKeyframes,
 moveFromBottomKeyframes,
 moveToTopKeyframes,
 scaleDown,
 fadeFrames
 } from './shared-keyframes';

 /** Move*/
  export const moveFromLeft = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [

        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromLeftKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', moveToRightKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.6', enterDelay: '0', leaveDelay: '0' } });

     export const moveFromRight = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
         animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromRightKeyframes)
      ], { optional: true }),
    query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', moveToLeftKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.6', enterDelay: '0', leaveDelay: '0' } });

          export const moveFromTop = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [

        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromTopKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', moveToBottomKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.6',  enterDelay: '0', leaveDelay: '0' } });


         export const moveFromBottom = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [

        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromBottomKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', moveToTopKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.6', enterDelay: '0', leaveDelay: '0' } });


  /** Fade*/
  export const moveFromLeftFade = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
       style({ 'z-index': '9999' }),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromLeftKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', fadeFrames)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.7',  enterDelay: '0', leaveDelay: '0' } });

     export const moveFromRightFade = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
         style({ 'z-index': '9999' }),
        animate('{{enterTiming}}s {{enterDelay}}s ease',moveFromRightKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', fadeFrames)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0' } });

          export const moveFromTopFade = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
         style({ 'z-index': '9999' }),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromTopKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', fadeFrames)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6',leaveTiming: '0.7',  enterDelay: '0', leaveDelay: '0' } });


         export const moveFromBottomFade = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
         style({ 'z-index': '9999' }),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromBottomKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', fadeFrames)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0' } });

         /** Different easing */

    export const fromLeftEasing= animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
         style({ 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromLeftKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', moveToRightKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.8',  enterDelay: '0', leaveDelay: '0' } });

 export const fromRightEasing= animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
         style({ 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromRightKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', moveToLeftKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.8',  enterDelay: '0', leaveDelay: '0' } });

         export const fromTopEasing = animation([
   query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
         style({ 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromTopKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', moveToBottomKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.8',  enterDelay: '0', leaveDelay: '0' } });

         export const fromBottomEasing = animation([
   query(':enter, :leave', style(sharedStyles)
   , { optional: true }),
  //  query(':enter', style({'opacity': '0'})
  //     , { optional: true }),
    group([
   query(':enter', [
         style({ 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromBottomKeyframes)
      ], { optional: true }),

        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', moveToTopKeyframes)
      ], { optional: true }),
    ])
        ],    { params: { enterTiming: '.6', leaveTiming: '0.8',  enterDelay: 0, leaveDelay: '0'  } });

/** Scale */

export const scaleDownFromLeft = animation( [
 query(':enter, :leave', style(sharedStyles)
    , { optional: true }),
    group([
      query(':enter', [
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromLeftKeyframes)
      ], { optional: true }),
        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', scaleDown)
      ], { optional: true }),
    ]),
], {params: {enterTiming: '0.6', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0'}});


export const scaleDownFromRight = animation( [
 query(':enter, :leave', style(sharedStyles)
    , { optional: true }),
    group([
      query(':enter', [
        style({'z-index': 999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromRightKeyframes)
      ], { optional: true }),
        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', scaleDown)
      ], { optional: true }),
    ]),
], {params: {enterTiming: '0.6', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0'}});


export const scaleDownFromTop = animation( [
 query(':enter, :leave', style(sharedStyles)
    , { optional: true }),
    group([
      query(':enter', [
           style({'z-index': 999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromTopKeyframes)
      ], { optional: true }),
        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', scaleDown)
      ], { optional: true }),
    ]),
], {params: {enterTiming: '0.6', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0'}});

export const scaleDownFromBottom = animation( [
 query(':enter, :leave', style(sharedStyles)
    , { optional: true }),
    group([
      query(':enter', [
        style({'z-index': 999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromBottomKeyframes)
      ], { optional: true }),
        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', scaleDown)
      ], { optional: true }),
    ]),
], {params: {enterTiming: '0.6', leaveTiming: '0.7',  enterDelay: '0', leaveDelay: '0'}});

export const scaleDownScaleDown = animation( [
 query(':enter, :leave', style(sharedStyles)
    , { optional: true }),
    group([
      query(':enter', [
        style({'z-index': 999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', keyframes([
         style({opacity: 0, transform: 'scale(1.2)', offset: 0}),
        style( {opacity: 1, transform: 'scale(1)', offset: 1})
        ])
        )
      ], { optional: true }),
        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', scaleDown)
      ], { optional: true }),
    ]),
], {params: {enterTiming: '0.5', leaveTiming: '0.7',  enterDelay: '0', leaveDelay: '0'}});

   /** Rotate animations */
export const rotateCubeToLeft = animation([
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({'transform-origin': '0% 50%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-in', keyframes([
            style({ opacity: '0.3', transform: 'translateX(100%) rotateY(90deg)', offset: 0}),
            style({ transform: 'translateX(50%) translateZ(-200px) rotateY(45deg)', offset: 0.5 }),
              style({opacity: '1', transform: 'translateX(0%) translateZ(00px) rotateY(0deg)', offset: 1 })
        ]))
      ], { optional: true }),

        query(':leave', [
          style({ opacity: '1',  'transform-origin': '100% 50%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
              style({ transform: 'translateX(-50%) translateZ(-200px) rotateY(-45deg)', offset: 0.5 }),
              style({opacity: '0.3', transform: 'translateX(-100%) rotateY(-90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
  ], {params: {enterTiming: '0.6', leaveTiming: '0.6',  enterDelay: '0', leaveDelay: '0'}});

  export const rotateCubeToRight = animation([
         query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({'transform-origin': '100% 50%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-in', keyframes([
            style({ opacity: '0.3', transform: 'translateX(-100%) rotateY(-90deg)', offset: 0}),
            style({ transform: 'translateX(-50%) translateZ(-200px) rotateY(-45deg)', offset: 0.5 }),
              style({opacity: '1', transform: 'translateX(0%) translateZ(00px) rotateY(0deg)', offset: 1 })
        ]))
      ], { optional: true }),

        query(':leave', [
          style({ opacity: '1',  'transform-origin': '0% 50%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
              style({ transform: 'translateX(50%) translateZ(-200px) rotateY(45deg)', offset: 0.5 }),
              style({opacity: '0.3', transform: 'translateX(100%) rotateY(90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
  ], { params: { enterTiming: '0.6', leaveTiming: '0.6', enterDelay: '0', leaveDelay: '0' } });

export const rotateCubeToTop = animation([
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({opacity: 0, 'transform-origin': '50% 0%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-in', keyframes([
            style({ opacity: '0.3', transform: 'translateY(100%) rotateX(-90deg)', offset: 0}),
            style({ transform: 'translateY(50%) translateZ(-200px) rotateX(-45deg)', offset: 0.5 }),
              style({opacity: '1', transform: 'translateX(0%) translateZ(00px) rotateY(0deg)', offset: 1 })
        ]))
      ], { optional: true }),

        query(':leave', [
          style({ opacity: '1', 'transform-origin': '50% 100%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
              style({ transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg)', offset: 0.5 }),
              style({opacity: '0.3', transform: 'translateY(-100%) rotateX(90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
], { params: { enterTiming: '0.6', leaveTiming: '0.6',  enterDelay: '0', leaveDelay: '0' } });

  export const rotateCubeToBottom = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({opacity: 0, 'transform-origin': '50% 100%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-in', keyframes([
            style({ opacity: '0.3', transform: 'translateY(-100%) rotateX(90deg)', offset: 0}),
            style({ transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg))', offset: 0.5 }),
              style({opacity: '1', transform: 'translateX(0%) translateZ(00px) rotateY(0deg)', offset: 1 })
        ]))
      ], { optional: true }),

        query(':leave', [
          style({ opacity: '1', 'transform-origin': '50% 0%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
              style({ transform: 'translateY(50%) translateZ(-200px) rotateX(-45deg)', offset: 0.5 }),
              style({opacity: '0.3', transform: 'translateY(100%) rotateX(-90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.6', leaveTiming: '0.6',  enterDelay: '0', leaveDelay: '0' }});

    export const rotateNewsPaper = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({ 'transform-origin': '50% 50%', opacity: '0', 'z-index': '9999'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', keyframes([
            style({ opacity: '0', transform: 'translateZ(-3000px)', offset: 0}),
              style({opacity: '1', transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ], { optional: true }),

        query(':leave', [
          style({ opacity: '1', 'transform-origin': '50% 50%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
              style({ opacity: 1,  transform: 'translate3d(0,0,0)',  offset: 0 }),
              style({opacity: '0', transform: 'translateZ(-3000px) rotateZ(360deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.5', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0' }});

  export const rotateFall = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({opacity: 0, 'transform-origin': '50% 100%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-in', keyframes([
            style({ opacity: '0', transform: 'scale(.8)', offset: 0}),
            style({ opacity: '1', transform: 'scale(1)', offset: 1 })
        ]))
      ], { optional: true }),

        query(':leave', [
        animate( '{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
              style({ transform: 'rotateZ(0deg) translateY(0%)',  'transform-origin': '0% 0%', offset: 0 }),
              style({ transform: 'rotateZ(10deg)', 'animation-timing-function': 'ease-out', offset: 0.2 }),
             style({ transform: 'rotateZ(17deg)', offset: 0.4}),
              style({ transform: 'rotateZ(16deg)', offset: 0.6 }),
               style({ transform: 'translateY(100%) rotateZ(17deg)', offset: 1 }),
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '1', enterDelay: '0', leaveDelay: '0' }});

/** Rotate Room */
     export const rotateRoomToLeft = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({'transform-origin': '0% 50%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', keyframes([
            style({ opacity: '0.3', transform: 'translateX(100%) rotateY(-90deg)', offset: 0}),
              style({opacity: '1', transform: 'translateX(0%) rotateY(0deg)', offset: 1 })
        ]))
      ], { optional: true }),
        query(':leave', [
           style({'transform-origin': '100% 50%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
              style({ opacity: '1', transform: ' translateX(0%) rotateY(0deg)', offset: 0 }),
              style({opacity: '0.3', transform: 'translateX(-100%) rotateY(90deg)',offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8', leaveTiming: '0.8',  enterDelay: '0', leaveDelay: '0' }});

    export const rotateRoomToRight = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
      style({'transform-origin': '100% 50%'}),
        query(':enter', [
        animate('{{enterTiming}}s {{enterDelay}}s ease', keyframes([
              style({ opacity: '0.3', transform: 'translateX(-100%) rotateY(90deg)', offset: 0 }),
              style({opacity: '1', transform: 'translateX(0%) rotateY(0deg)',offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
        style({'transform-origin': '0% 50%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
            style({ opacity: '1', transform: 'translateX(0%) rotateY(0deg)', offset: 0}),
              style({opacity: '0.3', transform: 'translateX(100%) rotateY(-90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8', leaveTiming: '0.8',  enterDelay: '0', leaveDelay: '0' }});

      export const rotateRoomToTop = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([

        query(':enter', [
          style({'transform-origin': '50% 0%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease', keyframes([
              style({ opacity: '0.3', transform: 'translateY(100%) rotateX(90deg)', offset: 0 }),
              style({opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
     style({'transform-origin': '50% 100%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
            style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 0}),
              style({opacity: '0.3', transform: 'translateY(-100%) rotateX(-90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8', leaveTiming: '0.8', enterDelay: '0', leaveDelay: '0' }});

       export const rotateRoomToBottom = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([

        query(':enter', [
        animate('{{enterTiming}}s {{enterDelay}}s ease', keyframes([
              style({ opacity: '0.3', 'transform-origin': '50% 100%', transform: 'translateY(-100%) rotateX(-90deg)', offset: 0 }),
              style({opacity: '1', transform: 'translateY(0%) rotateX(0deg)',offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
            style({ opacity: '1','transform-origin': '50% 0%', transform: 'translateY(0%) rotateX(0deg)', offset: 0}),
              style({opacity: '0.3', transform: 'translateY(100%) rotateX(90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8',leaveTiming: '0.8', enterDelay: '0', leaveDelay: '0' }});

    /** Rotate Sides */
     export const rotateSides = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([

        query(':enter', [
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', keyframes([
              style({ opacity: '0', 'transform-origin': '150% 50%', transform: 'translateZ(-500px) rotateY(-90deg)','z-index': '9999', offset: 0 }),
              style({opacity: '1', transform: 'translateX(0px) rotateY(0deg)',offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1','transform-origin': '-50% 50%', transform: 'translateZ(0px) rotateY(0deg)', offset: 0}),
              style({opacity: '0', transform: 'translateZ(-500px) rotateY(90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.5', leaveTiming: '0.5', enterDelay: '0', leaveDelay: '0' }});

     /** Rotate Flip */
     export const rotateFlipToRight = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([

        query(':enter', [
          style({opacity: '0', 'transform-origin': '50% 50%'}),
        animate('{{enterTiming}}s {{enterTiming}}s ease-out', keyframes([
              style({opacity: '0.2', transform: 'translateZ(-1000px) rotateY(-90deg)', offset: 0 }),
              style({opacity: '1', transform: 'translateZ(0px) rotateY(0deg)',offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1', 'transform-origin': '50% 50%', transform: 'translateZ(0px) rotateY(0deg)', offset: 0}),
              style({opacity: '0.2', transform: 'translateZ(-1000px) rotateY(90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.5', leaveTiming: '0.5', enterDelay: '0', leaveDelay: '0' }});

     export const rotateFlipToLeft = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({opacity: '0','transform-origin': '50% 50%'}),
        animate('{{enterTiming}}s {{enterTiming}}s ease-in', keyframes([
             style({opacity: '0.2', transform: 'translateZ(-1000px) rotateY(90deg)', offset: 0 }),
            style({ opacity: '1','transform-origin': '50% 50%', transform: 'translateZ(0px) rotateY(0deg)', offset: 1})
        ]))
      ], { optional: true }),
        query(':leave', [
              animate('{{leaveTiming}}s {{leaveDelay}}s ease-out', keyframes([
              style({opacity: '1', transform: 'translateZ(0px) rotateY(0deg)',offset: 0 }),
              style({opacity: '0.2', transform: 'translateZ(-1000px) rotateY(-90deg)', offset: 1 })

        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.5', leaveTiming: '0.5', enterDelay: '0', leaveDelay: '0' }});

       export const rotateFlipToTop = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([

        query(':enter', [
          style({opacity: '0','transform-origin': '50% 50%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', keyframes([
              style({opacity: '0.2', transform: 'translateZ(-1000px) rotateX(-90deg)', offset: 0 }),
              style({opacity: '1', transform: 'translateZ(0px) rotateX(0deg)',offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1','transform-origin': '50% 50%', transform: 'translateZ(0px) rotateX(0deg)', offset: 0}),
              style({opacity: '0.2', transform: 'translateZ(-1000px) rotateX(90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.5', leaveTiming: '0.5', enterDelay: '0', leaveDelay: '0' }});

     export const rotateFlipToBottom = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([

        query(':enter', [
          style({opacity: '0','transform-origin': '50% 50%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', keyframes([
              style({opacity: '0.2', transform: 'translateZ(-1000px) rotateX(-90deg)', offset: 0 }),
              style({opacity: '1', transform: 'translateZ(0px) rotateX(0deg)',offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1','transform-origin': '50% 50%', transform: 'translateZ(0px) rotateX(0deg)', offset: 0}),
              style({opacity: '0.2', transform: 'translateZ(-1000px) rotateX(-90deg)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.5', leaveTiming: '0.5', enterDelay: '0', leaveDelay: '0' }});

  /** Rotate Glue */

      export const rotateGlueFromRight = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({opacity: '0', 'transform-origin': '50% 50%', 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', moveFromRightKeyframes)
      ], { optional: true }),
   query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1', 'transform-origin': '0% 50%', offset: 0}),
            style({ opacity: '0.8', 'transform': 'rotateY(15deg)', 'animation-timing-function': 'ease-out', offset: 0.4}),
              style({opacity: '0', transform: 'scale(0.8) translateZ(-200px)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.6', leaveTiming: '0.8', enterDelay: '0.2', leaveDelay: '0' }});


  export const rotateGlueFromLeft = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({opacity: '0', 'transform-origin': '50% 50%', 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', moveFromLeftKeyframes)
      ], { optional: true }),
   query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1', 'transform-origin': '100% 50%', offset: 0}),
            style({ opacity: '0.8', 'transform': 'rotateY(-15deg)', 'animation-timing-function': 'ease-out', offset: 0.4}),
              style({opacity: '0', transform: 'scale(0.8) translateZ(-200px)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.6', leaveTiming: '0.8', enterDelay: '0.2', leaveDelay: '0' }});


export const rotateGlueFromBottom= animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({opacity: '0', 'transform-origin': '50% 50%', 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', moveFromBottomKeyframes)
      ], { optional: true }),
   query(':leave', [
     style({ 'transform-origin': '50% 0%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1', offset: 0}),
            style({ opacity: '0.8', 'transform': 'rotateX(-15deg)', 'animation-timing-function': 'ease-out', offset: 0.4}),
              style({opacity: '0', transform: 'scale(0.8) translateZ(-200px)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.6', leaveTiming: '0.8', enterDelay: '0.2', leaveDelay: '0' }});

    export const rotateGlueFromTop = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({opacity: '0', 'transform-origin': '50% 50%', 'z-index': 9999}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', moveFromTopKeyframes)
      ], { optional: true }),
   query(':leave', [
      style({ 'transform-origin': '50% 100%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-in', keyframes([
            style({ opacity: '1', offset: 0}),
            style({ opacity: '0.8', 'transform': 'rotateX(15deg)', 'animation-timing-function': 'ease-out', offset: 0.4}),
              style({opacity: '0', transform: 'scale(0.8) translateZ(-200px)', offset: 1 })
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.6', leaveTiming: '0.8', enterDelay: '0.2', leaveDelay: '0' }});

     export const rotateCarouselToLeft = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({'transform-origin': '0% 50%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease',  keyframes([
            style({ opacity: '0.3', transform:'translateX(200%) scale(.4) rotateY(65deg)', offset: 0}),
              style({opacity: '1', transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
      style({ 'transform-origin': '100% 50%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
              style({opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 0 }),
               style({ opacity: '.3', transform: 'translateX(-150%) scale(.4) rotateY(-65deg)', offset: 1}),
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8', leaveTiming: '0.8', enterDelay: '0', leaveDelay: '0' }});


      export const rotateCarouselToRight= animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({'transform-origin': '100% 50%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease',  keyframes([
            style({ opacity: '0.3', transform:'translateX(-200%) scale(.4) rotateY(-65deg)', offset: 0}),
              style({opacity: '1', transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
      style({ 'transform-origin': '0% 50%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
              style({opacity: '1', transform:'translate3d(0, 0, 0)', offset: 0 }),
               style({ opacity: '.3', transform: 'translateX(200%) scale(.4) rotateY(65deg)', offset: 1}),
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8', leaveTiming: '0.8', enterDelay: '0', leaveDelay: '0' }});

     export const rotateCarouselToTop = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({'transform-origin': '50% 0%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease',  keyframes([
            style({ opacity: '0.3', transform:'translateY(200%) scale(.4) rotateX(-65deg)', offset: 0}),
              style({opacity: '1', transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
      style({ 'transform-origin': '50% 100%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
              style({opacity: '1', transform:'translate3d(0, 0, 0)', offset: 0 }),
               style({ opacity: '.3', transform: 'translateY(-200%) scale(.4) rotateX(65deg)', offset: 1}),
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8', leaveTiming: '0.8', enterDelay: '0', leaveDelay: '0' }});

        export const rotateCarouselToBottom = animation( [
    query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
        query(':enter', [
          style({'transform-origin': '50% 100%'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease',  keyframes([
            style({ opacity: '0.3', transform:'translateY(-200%) scale(.4) rotateX(65deg)', offset: 0}),
              style({opacity: '1', transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ], { optional: true }),
   query(':leave', [
      style({ 'transform-origin': '50% 0%'}),
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', keyframes([
              style({opacity: '1', transform:'translate3d(0, 0, 0)', offset: 0 }),
               style({ opacity: '.3', transform: 'translateY(200%) scale(.4) rotateX(-65deg)', offset: 1}),
        ]))
      ], { optional: true }),
    ])
    ], { params: { enterTiming: '0.8', leaveTiming: '0.8', enterDelay: '0', leaveDelay: '0' }});

/** Slide */
export const slide = animation([
      query(':enter, :leave', style(sharedStyles)
      , { optional: true }),
    group([
   query(':enter', [
        style({ opacity: '0'}),
        animate('{{enterTiming}}s {{enterDelay}}s ease-out', keyframes([
              style({opacity: '0.5', transform: 'translateZ(-500px) translateX(200%)', offset: 0}),
              style({opacity: '0.5', transform: 'translateZ(-500px)', offset: 0.75 }),
              style({opacity: '1', transform: 'translateZ(0) translateX(0)',  offset: 1 }),
        ]))
      ], { optional: true }),
        query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease-out', keyframes([
              style({ opacity: '1', offset: 0}),
              style({opacity: '0.5', transform: 'translateZ(-500px)', offset: 0.25 }),
              style({opacity: '0.5', transform: 'translateZ(-500px) translateX(-200%)', offset: 0.75 }),
              style({opacity: '0', transform: 'translateZ(-500px) translateX(-200%)',  offset: 1 }),
        ]))
      ], { optional: true }),
    ])
], { params: { enterTiming: '1', leaveTiming: '1', enterDelay: '0', leaveDelay: '0' } });
