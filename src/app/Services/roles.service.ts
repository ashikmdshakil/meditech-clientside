import { async } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }
  
  getSystemRoles(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get('http://10.0.0.3:8080/systemRoles',{ headers: headers});
  }
  updateUserRole(user: User): Observable<any>{
    console.log(user.name);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://10.0.0.3:8080/assignRole',user,{headers: headers, responseType : "text"});
  }
 
  }

