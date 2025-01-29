// application.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private apiUrl = 'http://localhost:8081/applications';

  constructor(private http: HttpClient) {}

  getAllApplications(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  applyForJob(application: any): Observable<any> {
    return this.http.post(this.apiUrl, application);
  }

  getApplicationsByJob(jobId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/job/${jobId}`);
  }

  getApplicationsByUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
}
