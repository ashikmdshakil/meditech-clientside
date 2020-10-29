import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAvatar } from '../UserAvatar.model';

@Injectable({
  providedIn: 'root'
})
export class UserAvatarService {

  http: HttpClient;
  formData: FormData = new FormData();

  constructor(http: HttpClient) {
    this.http = http;
   }

  updateImage(userAvatar: UserAvatar): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    this.formData.append('profileImage', userAvatar.image);
    this.formData.append('userId', userAvatar.user.userId.toString());
    return this.http.post('http://10.0.0.3:8080/updateAvatar',this.formData,{headers: headers,'responseType': 'text'});
  }

  getImage(): Observable<any>{
      return this.http.get('http://10.0.0.3:8080/getImage',{responseType: 'arraybuffer'});
   }


}



