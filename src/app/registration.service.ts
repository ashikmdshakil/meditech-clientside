import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.model';

const ip = "10.0.0.3:8080";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user: User;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.user = new User;
   }
  registerUser(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    let status: string;
    return this.http.post(ip+'/signup',this.user,{'responseType': 'text'});
  }
  registerDoctor(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    let status: string;
    return this.http.post(ip+'/registerDoctor',this.user,{'responseType': 'text'});
  }
}
