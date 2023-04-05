import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { AnimationComponent } from './animation/animation.component';
import { PanoramaComponent } from './panorama/panorama.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: EntryPageComponent },
  {
    path: 'welcome',
    component: NavbarComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: 'Work', component: WorkComponent },
      { path: 'Animation', component: AnimationComponent },
      { path: '360', component: PanoramaComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
