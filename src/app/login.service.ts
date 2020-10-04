import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http : HttpClient;

  constructor(http : HttpClient) {
      this.http = http;
   }

  login(number: string, password: string): Observable<any>{

    let param = new HttpParams()
    .set('number' , number)
    .set('password' , password);
   
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(number + ':' + password)
  });
     return this.http.get('http://10.0.0.3:8080/login',{headers: headers,params: param});
  }
}