import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.model';

const ip = environment.ip;

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
    return this.http.post(ip+'/signup',this.user,{'responseType': 'text'});
  }
  registerDoctor(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/registerDoctor',this.user,{headers: headers,'responseType': 'text'});
  }

  registerDoctorWithDetails(user: User): Observable<string>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/registerDoctor',user,{headers: headers,'responseType': 'text'});
  }
  registerPatientDetails(user: User): Observable<string>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/registerPatient',user,{headers: headers,'responseType': 'text'});
  }
  registerSupermanDetails(user: User): Observable<string>{

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/registerSuperman',user,{headers: headers,'responseType': 'text'});
  }
  
  registerPatient(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/registerPatient',this.user,{headers: headers,'responseType': 'text'});
  }
  registerSuperman(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    //this.user.adminNumber = localStorage.getItem("username");
    //console.log("admin number is "+this.user.adminNumber);
    let status: string;
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/registerSuperman',this.user,{headers: headers,'responseType': 'text'});
  }
  registerDiagnosticCenter(name: string, email: string, number: string, password: string): Observable<string>{
    this.user.name = name;
    this.user.email = email;
    this.user.mobileNumber = number;
    this.user.password = password;
    //this.user.adminNumber = localStorage.getItem("username");
    //console.log("admin number is "+this.user.adminNumber);
    let status: string;
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ip+'/registerDiagnosticCenter',this.user,{headers: headers,'responseType': 'text'});
  }
}
