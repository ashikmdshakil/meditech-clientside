import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  http: HttpClient;

  constructor(http: HttpClient) {
      this.http = http;
   }

   getCategories(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get('http://10.0.0.3:8080/getCategories',{ headers: headers});
  }


  getUserCategories(): Observable<any>{
    let param = new HttpParams()
    .set('number' , localStorage.getItem("username"));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://10.0.0.3:8080/getUserCategories',{headers: headers,params: param, responseType: 'text'})
   }

}
