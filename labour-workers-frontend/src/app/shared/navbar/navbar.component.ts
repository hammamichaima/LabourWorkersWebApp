import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  logNavigation(route: string): void {
    console.log(`Navigating to: ${route}`);
  }
}
