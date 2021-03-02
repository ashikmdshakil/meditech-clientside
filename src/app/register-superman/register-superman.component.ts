import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register-superman',
  templateUrl: './register-superman.component.html',
  styleUrls: ['./register-superman.component.css']
})
export class RegisterSupermanComponent implements OnInit {
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
    let status = this.registration.registerSuperman(this.name, this.mail, this.number, this.password);
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
