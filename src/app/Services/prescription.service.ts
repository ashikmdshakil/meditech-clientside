import { User } from './../User.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../Model/Prescription.model';
import { PrescriptionReport } from '../Model/PrescriptionReport.model';
const ipAdress = "http://139.162.19.50:8080";
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  http: HttpClient;
  

  constructor(http: HttpClient) {
    this.http = http;
   }
 
   getUserPrescriptions(appoinmentId: number): Observable<any>{
    let param = new HttpParams()
    .set('appoinmentId',appoinmentId.toString());
    //let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get(ipAdress+'/getFullPrescription',{headers: headers,params: param})
   }
   

   saveUserPrescription(prescription: Prescription): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post(ipAdress+'/savePrescription',prescription,{headers: headers,'responseType': 'text'});
   }

   uploadReports(reports: PrescriptionReport[], id: number): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    let formData: FormData = new FormData();
    reports.forEach(report => {
      formData.append('reports', report.image);
    });
      formData.append('appoinmentId', id.toString());
    return this.http.post(ipAdress+'/uploadReports',formData,{headers: headers,'responseType': 'text'});
  }

}
