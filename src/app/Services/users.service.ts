import { User } from './../User.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http: HttpClient;

  constructor(http: HttpClient) {
      this.http = http;
   }

  getUsers(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get('http://10.0.0.3:8080/getUsers',{ headers: headers });
  }
}
