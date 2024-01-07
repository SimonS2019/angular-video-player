import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes = [
    { path: 'library1', name: 'Library 1' },
    { path: 'library2', name: 'Library 2' },
    // Add more routes as needed
  ];
}