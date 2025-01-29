import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'labour-workers-frontend';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(`Navigation started to: ${event.url}`);
      } else if (event instanceof NavigationEnd) {
        console.log(`Navigation ended successfully at: ${event.url}`);
      } else if (event instanceof NavigationError) {
        console.error(`Navigation error: ${event.error}`);
      }
    });
  }
}
