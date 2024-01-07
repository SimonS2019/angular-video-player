import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes = [
    { path: 'video-tag', name: 'Video Tag' },    // { path: 'library2', name: 'Library 2' },
    // Add more routes as needed
  ];
}