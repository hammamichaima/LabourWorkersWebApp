import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Ensure the base URL does not have any trailing slashes or spaces
  private apiUrl = 'http://localhost:8081/api/auth/';
  private authService: any;


  constructor(private http: HttpClient) {}



  /**
   * Logs in a user.
   * @param username - User's username.
   * @param email - User's email.
   * @param password - User's password.
   * @returns An observable with the server response.
   */

  signup(username: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8081/api/auth/signup', {
      username,
      email,
      password
    }, { headers });
  }

  /**
   * Logs in a user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns An observable with the server response.
   */
  login(email: string, password: string): Observable<any> {
    this.authService.login('test@example.com', 'password123');
    const data = { email, password }; // Create the payload
    this.http.post('http://localhost:8081/login', { email, password });

    return this.http.post(`http://localhost:8081/api/auth/login`, data); // Send POST request
  }
}



