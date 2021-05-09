import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ipAdress = environment.ip;
@Injectable({
  providedIn: 'root'
})
export class TestService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

   getTests(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getTestNames',{headers: headers})
   }

}
