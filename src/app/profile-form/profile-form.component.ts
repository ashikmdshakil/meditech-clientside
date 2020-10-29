import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddressBook } from '../AddressBook.model';
import { UsersService } from '../Services/users.service';
import { User } from '../User.model';
import { UserAvatarService } from './../Services/user-avatar.service';
import { UserAvatar } from './../UserAvatar.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  name: string;
  mail: string;
  number: string;
  imageUrl: any;
  isChecked: boolean = false;
  addressBooks: AddressBook = new AddressBook();
  user: User = new User();
  userAvatar: UserAvatar = new UserAvatar();
  userService: UsersService;
  userAvatarService: UserAvatarService;
  router: Router;
  domSanitizer: DomSanitizer;
  

  constructor(userService: UsersService, router: Router, domSanitizer: DomSanitizer, userAvatarService: UserAvatarService){ 
    this.userService = userService;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.userAvatarService = userAvatarService;
  }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('username')).subscribe(result =>{
      this.user = JSON.parse(result);
      this.name = this.user.name;
      this.mail = this.user.email;
      this.number = this.user.mobileNumber;
      if(this.user.addressBooks !== null){
        this.addressBooks = this.user.addressBooks;
      }
      let image = 'data:image/png;base64, '+this.user.userAvatar.image;
      this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(image);
      }) 

      
    }
  

  update(){
    if(this.isChecked){
    this.user.addressBooks = this.addressBooks;
    this.userService.updateUser(this.user).subscribe(result =>{
        if(result == 'success'){
          this.name = this.user.name;
          this.mail = this.user.email;
          this.number = this.user.mobileNumber;
        }
        this.router.navigateByUrl('/profile/(nav:refresh)').then(()=>{
        this.router.navigateByUrl('/profile');
      })
    }); 
  }
  }
  handleChange(event){
    if(event.target.checked){
      this.isChecked = true;
    }
    else{
      this.isChecked = false;
    }
  }
  uploadImage(event){
      if(event.target.files[0]){
        let file: File = event.target.files[0];
        this.userAvatar.image = file;
        this.userAvatar.user = this.user;
        this.userAvatarService.updateImage(this.userAvatar).subscribe(response =>{
          console.log(response);
        });
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event)=>{
          this.imageUrl = fileReader.result;
          console.log(this.imageUrl);
        } 
  }
}
 
}
