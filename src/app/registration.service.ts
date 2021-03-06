import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.model';

const ip = "http://10.0.0.3:8080";

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
  UserSignUp(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    if(localStorage.getItem('role') === 'superman'){
      this.user.adminNumber = localStorage.getItem("username");
      console.log("admin number is "+this.user.adminNumber);
    }
    let status: string;
    return this.http.post(ip+'/signup',this.user,{'responseType': 'text'});
  }
  registerDoctor(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    if(localStorage.getItem('role') === 'superman'){
      this.user.adminNumber = localStorage.getItem("username");
      console.log("admin number is "+this.user.adminNumber);
    }
    let status: string;
    return this.http.post(ip+'/registerDoctor',this.user,{'responseType': 'text'});
  }
  registerPatient(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    if(localStorage.getItem('role') === 'superman'){
      this.user.adminNumber = localStorage.getItem("username");
      console.log("admin number is "+this.user.adminNumber);
    }
    let status: string;
    return this.http.post(ip+'/registerPatient',this.user,{'responseType': 'text'});
  }
  registerSuperman(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    //this.user.adminNumber = localStorage.getItem("username");
    //console.log("admin number is "+this.user.adminNumber);
    let status: string;
    return this.http.post(ip+'/registerSuperman',this.user,{'responseType': 'text'});
  }
}
