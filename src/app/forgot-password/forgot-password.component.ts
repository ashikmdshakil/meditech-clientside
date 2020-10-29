import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  number: string;
  userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
   }

  ngOnInit(): void {
  }

  resetPassword(){
      this.userService.requestForResetPassword(this.number).subscribe(response =>{
        
      });
  }

}
