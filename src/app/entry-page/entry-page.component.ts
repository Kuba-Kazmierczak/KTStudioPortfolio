import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css'],
})
export class EntryPageComponent {
  links = [{ title: 'welcome', fragment: 'welcome' }];
  constructor(public route: ActivatedRoute) {}
}
