import { FollowComponent } from './follow/follow.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {state: 'home'} },
  { path: 'about', component: AboutComponent, data: {state: 'about'}},
  { path: 'contact', component: ContactComponent, data: {state: 'contact'} },
  { path: 'follow', component: FollowComponent, data: {state: 'follow'} },
];

export const AnimationExamplesRoutes = RouterModule.forChild(routes);
