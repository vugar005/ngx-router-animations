import { AnimationSelectMenuComponent } from './animation-select-menu/animation-select-menu.component';
import { AnimationExamplesRoutes } from './animation-examples.routing';
import { FollowComponent } from './follow/follow.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationExamplesComponent } from './animation-examples.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';

@NgModule({
  imports: [
    CommonModule,
    AnimationExamplesRoutes,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [
    AnimationExamplesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FollowComponent,
    NavigationComponent,
    AnimationSelectMenuComponent
  ],
  exports: [AnimationExamplesComponent]
})
export class AnimationExamplesModule { }
