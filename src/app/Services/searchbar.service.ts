import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { KeyedWrite } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ipAdress = environment.ip;
 
@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }
  searchDoctors(kewWords: string): Observable<any>{
    let param = new HttpParams()
    .set('keyWords' , kewWords);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAdress+'/searchUsers',{ headers: headers, params: param });
  }
}
