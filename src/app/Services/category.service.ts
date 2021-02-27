import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ip = "http://10.0.0.3:8080";

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
    return this.http.get(ip+'/getCategories',{ headers: headers});
  }


  getUserCategories(): Observable<any>{
    let param = new HttpParams()
    .set('number' , localStorage.getItem("username"));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ip+'/getUserCategories',{headers: headers,params: param, responseType: 'text'})
   }

   getUserDoctorList(id: number): Observable<any>{
    let param = new HttpParams()
    .set('id' , id.toString());
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ip+'/getDoctorList',{headers: headers,params: param})
   }

}
