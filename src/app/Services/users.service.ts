import { environment } from './../../environments/environment';
import { User } from './../User.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../Model/Prescription.model';
const ipAdress = environment.ip;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http: HttpClient;
  formData: FormData = new FormData();

  constructor(http: HttpClient) {
      this.http = http;
   }

  getUsers(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.get(ipAdress+'/getUsers',{ headers: headers });
  }
  
  getUser(mobileNumber: string): Observable<any>{
    let param = new HttpParams()
    .set('number' , mobileNumber);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getUser',{headers: headers,params: param})
   }

   getUserById(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getUserById',{headers: headers,params: param})
   }

   removeUser(user: User): Observable<any>{
    user.userAvatar = null;
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAdress+'/removeUser',user,{headers: headers,'responseType': 'text'});
   }

   updateUser(user: User): Observable<string>{
     user.userAvatar = null;
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    console.log(user.addressBooks.city);
    return this.http.post(ipAdress+'/updateUser',user,{headers: headers,'responseType': 'text'});
  }

  requestForResetPassword(number: string): Observable<String>{
      this.formData.delete('number');
      this.formData.append('number', number);
    return this.http.post(ipAdress+'/mailForResetPassword',this.formData,{'responseType': 'text'});
    
  }

  setPassword(token: string, password: string): Observable<String>{
      this.formData.delete('tokenString');
      this.formData.delete('password');
      this.formData.append('tokenString', token);
      this.formData.append('password', password);
    return this.http.post(ipAdress+'/setPassword',this.formData,{responseType: 'text'});
  }
  saveUserPrescription(prescription: Prescription): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAdress+'/savePrescriptionMedicine',prescription,{headers: headers,'responseType': 'text'});
   }

   getUserPrescriptions(id: number): Observable<any>{
    let param = new HttpParams()
    .set('id' , id.toString());
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getPrescriptions',{headers: headers,params: param})
   }

   getAdminDoctors(mobileNumber: string): Observable<any>{
    let param = new HttpParams()
    .set('number' , mobileNumber);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getAdminDoctors',{headers: headers,params: param});
   }

   getAdminPatients(mobileNumber: string): Observable<any>{
    let param = new HttpParams()
    .set('number' , mobileNumber);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getAdminPatients',{headers: headers,params: param});
   }

   getAdminSupermen(mobileNumber: string): Observable<any>{
    let param = new HttpParams()
    .set('number' , mobileNumber);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getAdminSupermen',{headers: headers,params: param});
   }

   getAppDoctors(): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getAppDoctors',{headers: headers});
   }
  

}
