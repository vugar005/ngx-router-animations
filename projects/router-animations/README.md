
# Angular Router Animations

<p align="center">
 <img  src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/962/square_256/angularcli.png">
 <p>

ngx-router-animations is a collection of awesome, reusable router animations. Inspired by tympanus.net (thanks to Pedro Botelho)  and implements those animations but with Angular Animation Package.

[![npm](https://img.shields.io/npm/l/ngx-router-animations.svg)]() [![NPM Downloads](https://img.shields.io/npm/dt/ngx-router-animations.svg)](https://www.npmjs.com/package/ngx-router-animations) [![npm](https://img.shields.io/twitter/follow/vugar005.svg?label=Follow)](https://twitter.com/vugar005) [![npm](https://img.shields.io/github/issues/vugar005/ngx-router-animations.svg)](https://github.com/vugar005/ngx-router-animations) [![npm](https://img.shields.io/github/last-commit/vugar005/ngx-router-animations.svg)](https://github.com/vugar005/ngx-router-animations)


> **Note**: the library requires Angular 4.2+, which introduced [different new animation APIs](https://www.yearofmoo.com/2017/06/new-wave-of-animation-features.html) needed by `ngx-router-animations`.
* [Demo](#demo)
* [Install](#install)
* [Usage](#usage)
* [Passing Parameters](#parameters)



## DEMO
[Animations Showcase](https://ngx-router-animations.stackblitz.io/) or
[StackBlitzDemo](https://stackblitz.com/edit/ngx-router-animations-example?file=src%2Fapp%2Fapp.component.ts)
## Install
     npm install ngx-router-animations --save

#####  Load  BrowserAnimationsModule which is needed by Angular Animations
```typescript
import { FilePickerModule } from 'ngx-awesome-uploader';
@NgModule({
  imports: [
    ...
    BrowserAnimationsModule
  ]
})
```
> **Note** If you want to support for IE/Edge or Safari install [web-animations-js polyfill](https://github.com/web-animations/web-animations-js).
>
##  Usage
**1 )**  Name your routers which you want to animate by passing data to them. ( EG: state)
```
const routes:  Routes  =  [
{ path: '', redirectTo:  'home', pathMatch:  'full'  },
{ path: 'home', component: HomeComponent, data: {state:  'home'}  },
{ path: 'about', component: AboutComponent, data: {state:  'about'}},
{ path: 'contact', component: ContactComponent, data: {state:  'contact'}  },
{ path: 'follow', component: FollowComponent, data: {state:  'follow'}  },
];
```
**2 )** Choose your favorite animation from [Animations Showcase](https://ngx-router-animations.stackblitz.io/)

**3 )** Import your animation from the package:
```typescript
import  {trigger, transition, useAnimation}  from  "@angular/animations";
import  {rotateCubeToLeft}  from  "ngx-router-animations";

@Component({
selector:  'my-app',
templateUrl:  './app.component.html',
styleUrls:  [  './app.component.css'  ],
animations:  [
	trigger('rotateCubeToLeft',  [ transition('home => about', useAnimation(rotateCubeToLeft))])
	]
})

export  class  AppComponent  {
	getState(outlet)  {
		return outlet.activatedRouteData.state;
	}
}
 ```
 >**Note**:  As you see this example is to animate from Home To About page. If you want to animate any page you can try * => * transition. The purpose of getState function will be explained next.
 >
**4 )** In template

```html
<div
	class="router-wrapper"
	[@rotateCubeToLeft]="getState(o)"
	>
	<router-outlet #o="outlet">  </router-outlet>
</div>
 ```
 >**Note**: We provide state to animation by getState function that gets name of curent route which is the name we just provided in routing .
 >
**5 )**  In order to have correct animation your router-wrapper should have fixed (width, height) and below styles: (width and height can be customized)
``` css
.router-wrapper  {
	position:  relative;
	overflow:  hidden;
	width:  100vw;
	height:  calc(100%  -  47px);
	perspective:  1200px;
	transform-style:  preserve-3d;
}
```
In addition your components should also have defined width and height. The reason is to keep animation smooth since when navigating the content of that component is removed by router.  Example:  in home and about components.scss
```css
:host  {
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	background: #60d7a9;
}
```
Still in Doubt ? Check [minimalistic demo ](https://stackblitz.com/edit/ngx-router-animations-example?file=src%2Fapp%2Fapp.component.ts)

## Parameters
 You can also provide your custom animation parameters such as duration and delay of animations.  Supported params: ( enterTiming, leaveTiming, enterDelay, leaveDelay).
 Example with params:
 ``` typescript
 animations: [
	trigger('rotateCubeToLeft', [ transition('* => *', useAnimation(rotateCubeToLeft,{
		params: {enterTiming: '1', leaveTiming: '1', enterDelay: '0.2', leaveDelay: '0.2'}
		}
	))])
]
```

>**Note**: Since in some cases params are not directly related,  checkout at default params table so you can adjust timings according to them.
>

#### Default parameters table

| **Animation**  | **enterTiming**                                                                                                                                               | **leaveTiming**  |**enterdelay**  |**leaveDelay**
|-------|-------|-------|-------|-------|
| Move  | 0.6  | 0.6 | 0 | 0
| Fade  | 0.6  | 0.7 | 0 | 0
| Scale  | 0.6  | 0.7 | 0 | 0
| Easing  | 0.6  | 0.6 | 0 | 0
| Slide  | 1  | 1 | 0 | 0
| Rotate / Glue | 0.6  | 0.8 | 0.2 | 0
| Rotate / Flip | 0.5  | 0.5 | 0 | 0
| Rotate / Room | 0.8  | 0.8 | 0 | 0
| Rotate / Cube | 0.6  | 0.6 | 0 | 0
| Rotate / Carousel | 0.8  | 0.8 | 0 | 0
| Rotate / Sides | 0.5  | 0.5 | 0.2 | 0

## Contribution

 You can fork project from [github](https://github.com/vugar005/ngx-router-animations).  Pull requests are kindly accepted.
💡 Checkout my other library: [ngx-awesome-uploader](https://www.npmjs.com/package/ngx-awesome-uploader) .