import { RegistrationService } from './../registration.service';
import { User } from './../User.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  mail: string;
  number: string;
  password: string;
  registration : RegistrationService;
  alertExist: boolean = false;
  alertMessage: string = null;

  constructor(registration: RegistrationService) {
    this.registration = registration;
  }
  
  signUp(){
    let status = this.registration.registerUser(this.name, this.mail, this.number, this.password);
    status.subscribe((status)=>{
      if(status == 'success'){
        this.alertExist = true;
        this.alertMessage = "Sign Up is successfull !";
        this.name = null;
        this.mail = null;
        this.number = null;
        this.password = null;
      }
      if(status == 'wrong'){
        this.alertExist = true;
        this.alertMessage = "Something went wrong or you already have an account.";
        this.name = null;
        this.mail = null;
        this.number = null;
        this.password = null;
      }
    })
    
  }

  ngOnInit(): void {
  }

}
