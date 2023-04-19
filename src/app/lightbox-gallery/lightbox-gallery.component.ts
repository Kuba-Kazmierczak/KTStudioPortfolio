import { Component, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox'; 
@Component({
  selector: 'app-lightbox-gallery',
  templateUrl: './lightbox-gallery.component.html',
  styleUrls: ['./lightbox-gallery.component.css']
})
export class LightboxGalleryComponent {
  
  
  _album: Array<{ src: string; caption: string; thumb: string; }> = []; 

  constructor(private _lightbox: Lightbox) {
   for (let i = 1; i <= 5; i++) {
   const src = '../../assets/utils/dom' + i + '.jpg'; const caption = 'Image ' + i + ' caption here'; 
   const thumb = '../../assets/utils/dom' + i + '.jpg'; 
   const album = { src: src, caption: caption, thumb: thumb }; 
  this._album.push(album); 
  } 
  } 
  
  open(index: number): void { // open lightbox 
  this._lightbox.open(this._album, index); 
  } 
  
  close(): void { // close lightbox programmatically 
  this._lightbox.close(); 
}
}
