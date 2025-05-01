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
  //private authService: any;

  constructor(private http: HttpClient) {}



  /**
   * Logs in a user.
   * @param username - User's username.
   * @param email - User's email.
   * @param password - User's password.
   * @returns An observable with the server response.
   */


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true // ✅ Important for CORS requests
  };
  private formData: string | undefined;
/*
  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8081/api/auth/signup', this.formData, {
      withCredentials: true
    });
*/

  signup(username: string, email: string, password: string): Observable<any> {
    const body = { username, email, password };
    return this.http.post('http://localhost:8081/api/auth/signup', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true // Permet d'envoyer les cookies (si nécessaire)
    });


  }


  /**
   * Logs in a user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns An observable with the server response.
   */
  /*
  login(email: string, password: string): Observable<any> {
    this.authService.login('test@example.com', 'password123');
    const data = { email, password }; // Create the payload
    this.http.post('http://localhost:8081/login', { email, password });

    return this.http.post(`http://localhost:8081/api/auth/login`, data); // Send POST request
  }

   */
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}signin`, { email, password });
  }
}



