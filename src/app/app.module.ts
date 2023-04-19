import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { AnimationComponent } from './animation/animation.component';
import { PanoramaComponent } from './panorama/panorama.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LightboxModule } from 'ngx-lightbox';
import { LightboxGalleryComponent } from './lightbox-gallery/lightbox-gallery.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, EntryPageComponent, WorkComponent, AnimationComponent, PanoramaComponent, AboutComponent, ContactComponent, LightboxGalleryComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, LightboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
