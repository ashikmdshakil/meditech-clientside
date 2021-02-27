import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ip = "http://10.0.0.3:8080";
@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  http: HttpClient;

  constructor(http: HttpClient) { 
    this.http = http;
  }
  doLogout(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
     return this.http.post(ip+'/logoutUser',{},{headers: headers});
  }
  }

