import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  getServices() {
    return this.http.get(`${baseUrl}/user/service`);
  }
  loginUser(data) {
    return this.http.get(`${baseUrl}/user/login`, data);
  }
}
