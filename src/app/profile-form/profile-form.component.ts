import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBook } from '../AddressBook.model';
import { UsersService } from '../Services/users.service';
import { User } from '../User.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  name: string;
  mail: string;
  number: string;
  isChecked: boolean = false;
  addressBooks: AddressBook = new AddressBook();
  user: User = new User();
  userService: UsersService;
  router: Router;

  constructor(userService: UsersService, router: Router){ 
    this.userService = userService;
    this.router = router;
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

}
