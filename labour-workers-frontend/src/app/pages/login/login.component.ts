import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Import the AuthService for authentication
import { Router } from '@angular/router'; // Import Router to navigate after login
import { NgForm } from '@angular/forms'; // Import for form handling

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }


  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Handle successful login (e.g., redirect to dashboard)
      },
      error: (err) => {
        console.error('Login error:', err);
        if (err.status === 400) {
          this.errorMessage = 'Invalid email or password';
        } else if (err.status === 401) {
          this.errorMessage = 'Unauthorized: Check your credentials';
        } else if (err.status === 0) {
          this.errorMessage = 'CORS issue or server unreachable.';
          console.error('Possible CORS error or backend is not running.');
        } else {
          this.errorMessage = 'Server error. Please try again later.';
        }
      }
    });
  }
    }




