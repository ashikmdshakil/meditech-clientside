import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ipAdress = "http://139.162.19.50:8080";
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
