import { async } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User.model';
const ip = "http://182.48.90.214:8080";
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
    return this.http.get(ip+'/systemRoles',{ headers: headers});
  }
  
  updateUserRole(user: User): Observable<any>{
    user.userAvatar = null;
    console.log(user.name);
    console.log(user.roles.roleId);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/assignRole',user,{headers: headers, responseType : "text"});
  }
 
  }

