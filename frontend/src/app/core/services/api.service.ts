import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactForm, ApiResponse } from '../models/contact.model';
import { DemoRequest } from '../models/demo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  submitContactForm(data: ContactForm): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/contact`, data);
  }

  submitDemoRequest(data: DemoRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/demo`, data);
  }

  checkHealth(): Observable<{ status: string; timestamp: string }> {
    return this.http.get<{ status: string; timestamp: string }>(`${this.apiUrl}/health`);
  }
}
