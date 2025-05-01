import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {




  username: string = '';
  email: string = '';
  password: string = '';

  successMessage: string = '';
  errorMessage: string = '';
  private http: any;


  constructor(private authService: AuthService, private router: Router) {
  }

  onSignup(): void{
    this.authService.signup(this.username, this.email, this.password).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        this.successMessage = 'Signup successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 1500); // 1.5 secondes
      },


      error: (err) => {
        console.error('Signup error details:', err);
        if (err.status === 0) {
          this.errorMessage = 'CORS issue or server unreachable.';
        } else if (err.status === 400) {
          this.errorMessage = 'Invalid signup details.';
        } else {
          this.errorMessage = 'Server error. Please try again later.';
        }
      },
    });
  }


 // getUsers(): Observable<any> {
   // return this.http.get('/api/auth/users');
 // }
}
