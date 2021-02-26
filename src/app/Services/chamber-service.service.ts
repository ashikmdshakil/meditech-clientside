import { Chamber } from './../Model/Chamber.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const ipAdress = "http://10.0.0.3:8080";
@Injectable({
  providedIn: 'root'
})
export class ChamberServiceService {

  http: HttpClient;
  
  constructor(http: HttpClient) {
    this.http = http;
   }

  updateChamber(chamber: Chamber): Observable<any>{
    console.log('chamber name is '+chamber.name);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://10.0.0.3:8080/updateChamber',chamber,{headers: headers,'responseType': 'text'});
   }

   getChamber(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getChamber',{headers: headers,params: param})
   }

   getChambers(): Observable<any>{
    //let param = new HttpParams()
    //.set('id' , id);
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getChambers',{headers: headers})
   }
}
