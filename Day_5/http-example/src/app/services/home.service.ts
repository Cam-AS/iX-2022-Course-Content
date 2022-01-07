import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  firstResponse: string = '';

  constructor(private http: HttpClient) {}

  getRequestToFirstServer() {
    return this.http.get('http://localhost:3000').toPromise();
  }
}
