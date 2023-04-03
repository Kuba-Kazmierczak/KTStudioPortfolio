import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  links = [
    { title: 'Work', fragment: 'work' },
    { title: 'Animation', fragment: 'Animation' },
    { title: '360', fragment: '360' },
    { title: 'About', fragment: 'About' },
    { title: 'Contact', fragment: 'Contact' },
  ];

  constructor(public route: ActivatedRoute) {}
}
