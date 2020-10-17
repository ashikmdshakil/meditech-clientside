import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  user: User  = new User();
  isChecked: boolean = false;
  userService :UsersService;
  router: Router;
  constructor(userService: UsersService, router: Router) {
      this.userService = userService;
      this.router = router;
   }
  ngOnInit(): void {
    this.userService.getUser(history.state.number).subscribe((response)=>{
      this.user = JSON.parse(response);
    })
  }

  handleChange(event){
    if(event.target.checked){
      this.isChecked = true;
    }
    else{
      this.isChecked = false;
    }
  }
  removeUser(){
    if(this.isChecked){
      this.userService.removeUser(this.user).subscribe(response =>{
        console.log(response);
      })
    }
    else{
      console.log('you are not able to remove this user');
    }
  }
  close(){
    this.router.navigateByUrl('/admin-pannel/(setRole:blank)')
  }

}
