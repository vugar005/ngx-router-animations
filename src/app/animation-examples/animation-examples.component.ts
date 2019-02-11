import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import {
  moveFromLeft,
  moveFromRight,
  moveFromTop,
  moveFromBottom,

  moveFromLeftFade,
  moveFromRightFade,
  moveFromTopFade,
  moveFromBottomFade,

  fromLeftEasing,
  fromRightEasing,
  fromTopEasing,
  fromBottomEasing,

  scaleDownFromLeft,
  scaleDownFromRight,
  scaleDownFromTop,
  scaleDownFromBottom,
  scaleDownScaleDown,

  rotateGlueFromLeft,
  rotateGlueFromRight,
  rotateGlueFromTop,
  rotateGlueFromBottom,

  rotateFlipToLeft,
  rotateFlipToRight,
  rotateFlipToTop,
  rotateFlipToBottom,

  rotateNewsPaper,

  rotateRoomToLeft,
  rotateRoomToRight,
  rotateRoomToTop,
  rotateRoomToBottom,

  rotateCubeToLeft,
  rotateCubeToRight,
  rotateCubeToTop,
  rotateCubeToBottom,

  rotateCarouselToLeft,
  rotateCarouselToRight,
  rotateCarouselToTop,
  rotateCarouselToBottom,
  rotateSides,

  slide } from 'projects/router-animations/src/lib/router-animations';
import { Router } from '@angular/router';

@Component({
  selector: 'animation-examples',
  templateUrl: './animation-examples.component.html',
  styleUrls: ['./animation-examples.component.scss'],
  animations: [
    trigger('moveFromLeft', [ transition('* => *', useAnimation(moveFromLeft))]),
    trigger('moveFromRight', [ transition('* => *', useAnimation(moveFromRight))]),
    trigger('moveFromTop', [ transition('* => *', useAnimation(moveFromTop))]),
    trigger('moveFromBottom', [ transition('* => *', useAnimation(moveFromBottom))]),

     trigger('moveFromLeftFade', [ transition('* => *', useAnimation(moveFromLeftFade))]),
    trigger('moveFromRightFade', [ transition('* => *', useAnimation(moveFromRightFade))]),
    trigger('moveFromTopFade', [ transition('* => *', useAnimation(moveFromTopFade))]),
    trigger('moveFromBottomFade', [ transition('* => *', useAnimation(moveFromBottomFade))]),

    trigger('fromLeftEasing', [ transition('* => *', useAnimation(fromLeftEasing))]),
    trigger('fromRightEasing', [ transition('* => *', useAnimation(fromRightEasing))]),
    trigger('fromTopEasing', [ transition('* => *', useAnimation(fromTopEasing))]),
    trigger('fromBottomEasing', [ transition('* => *', useAnimation(fromBottomEasing))]),

    trigger('scaleDownFromLeft', [ transition('* => *', useAnimation(scaleDownFromLeft))]),
    trigger('scaleDownFromRight', [ transition('* => *', useAnimation(scaleDownFromRight))]),
    trigger('scaleDownFromTop', [ transition('* => *', useAnimation(scaleDownFromTop))]),
    trigger('scaleDownFromBottom', [ transition('* => *', useAnimation(scaleDownFromBottom))]),

    trigger('rotateGlueFromLeft', [ transition('* => *', useAnimation(rotateGlueFromLeft))]),
    trigger('rotateGlueFromRight', [ transition('* => *', useAnimation(rotateGlueFromRight))]),
    trigger('rotateGlueFromTop', [ transition('* => *', useAnimation(rotateGlueFromTop))]),
    trigger('rotateGlueFromBottom', [ transition('* => *', useAnimation(rotateGlueFromBottom))]),

    trigger('rotateFlipToLeft', [ transition('* => *', useAnimation(rotateFlipToLeft))]),
    trigger('rotateFlipToRight', [ transition('* => *', useAnimation(rotateFlipToRight))]),
    trigger('rotateFlipToTop', [ transition('* => *', useAnimation(rotateFlipToTop))]),
    trigger('rotateFlipToBottom', [ transition('* => *', useAnimation(rotateFlipToBottom))]),

    trigger('rotateRoomToLeft', [ transition('* => *', useAnimation(rotateRoomToLeft))]),
    trigger('rotateRoomToRight', [ transition('* => *', useAnimation(rotateRoomToRight))]),
    trigger('rotateRoomToTop', [ transition('* => *', useAnimation(rotateRoomToTop))]),
    trigger('rotateRoomToBottom', [ transition('* => *', useAnimation(rotateRoomToBottom))]),

    trigger('rotateCubeToLeft', [ transition('* => *', useAnimation(rotateCubeToLeft))]),
    trigger('rotateCubeToRight', [ transition('* => *', useAnimation(rotateCubeToRight))]),
    trigger('rotateCubeToTop', [ transition('* => *', useAnimation(rotateCubeToTop))]),
    trigger('rotateCubeToBottom', [ transition('* => *', useAnimation(rotateCubeToBottom))]),

    trigger('rotateCarouselToLeft', [ transition('* => *', useAnimation(rotateCarouselToLeft))]),
    trigger('rotateCarouselToRight', [ transition('* => *', useAnimation(rotateCarouselToRight))]),
    trigger('rotateCarouselToTop', [ transition('* => *', useAnimation(rotateCarouselToTop))]),
    trigger('rotateCarouselToBottom', [ transition('* => *', useAnimation(rotateCarouselToBottom))]),

    trigger('rotateSides', [ transition('* => *', useAnimation(rotateSides))]),



    trigger('slide', [ transition('* => *', useAnimation(slide))]),
   ]
})
export class AnimationExamplesComponent implements OnInit {
  animationType  = '';
  modules = ['home', 'about', 'follow', 'contact'];
  state: string;
  pageIndex = 0;
  animating: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.state = this.modules[this.pageIndex];
  }
  onSelect(event) {
   // this.animating = true;
  //  setTimeout(() => this.animating = false, 15000);
    this.animationType = event;
    console.log(this.animationType);
    this.nextPage();
  }
  nextPage() {
    if (this.modules[this.pageIndex + 1]) {
      console.log(this.modules[this.pageIndex + 1]);
     this.router.navigateByUrl(this.modules[this.pageIndex + 1]);
     this.pageIndex++;
    } else {
      this.pageIndex = 0;
      this.router.navigateByUrl(this.modules[this.pageIndex]);
    }
  }
  getState(outlet, name: string) {
    if (name !== this.animationType) {return; }
    return outlet.activatedRouteData.state;
   }
}
