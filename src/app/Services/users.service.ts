import { User } from './../User.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.get('http://10.0.0.3:8080/getUsers',{ headers: headers });
  }
  
  getUser(mobileNumber: string): Observable<any>{
    let param = new HttpParams()
    .set('number' , mobileNumber);
    let user :any = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://10.0.0.3:8080/getUser',{headers: headers,params: param, responseType: 'text'})
   }

   removeUser(user: User): Observable<any>{
    user.userAvatar = null;
     console.log(user.roles.roleId);
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://10.0.0.3:8080/removeUser',user,{headers: headers,'responseType': 'text'});
   }

   updateUser(user: User): Observable<string>{
     user.userAvatar = null;
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    console.log(user.addressBooks.city);
    return this.http.post('http://10.0.0.3:8080/updateUser',user,{headers: headers,'responseType': 'text'});
  }

  requestForResetPassword(number: string): Observable<String>{
      this.formData.delete('number');
      this.formData.append('number', number);
    return this.http.post('http://10.0.0.3:8080/mailForResetPassword',this.formData,{'responseType': 'text'});
    
  }

  setPassword(token: string, password: string): Observable<String>{
      this.formData.delete('tokenString');
      this.formData.delete('password');
      this.formData.append('tokenString', token);
      this.formData.append('password', password);
    return this.http.post('http://10.0.0.3:8080/setPassword',this.formData,{responseType: 'text'});
  }
  

}
