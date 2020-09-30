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

  constructor(registration: RegistrationService) {
    this.registration = registration;
  }
  
  signUp(){
    this.registration.registerUser(this.name, this.mail, this.number, this.password);
  }

  ngOnInit(): void {
  }

}
