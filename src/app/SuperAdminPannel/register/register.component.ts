import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  roleId: number;
  name: string;
  mail: string;
  number: string;
  password: string;
  registration : RegistrationService;
  alertExist: boolean = false;
  alertMessage: string = null;
  message: string;

  constructor(registration: RegistrationService) {
    this.registration = registration;
  }
  
  signUp(){
    let status;
    if(this.roleId == 1){
      status = this.registration.registerPatient(this.name, this.mail, this.number, this.password);
    }
    else if(this.roleId == 2){
      status = this.registration.registerDoctor(this.name, this.mail, this.number, this.password);
    }
    else if(this.roleId == 4){
      status = this.registration.registerSuperman(this.name, this.mail, this.number, this.password);
    }
    else if(this.roleId == 5){
      status = this.registration.registerDiagnosticCenter(this.name, this.mail, this.number, this.password);
    }
    status.subscribe((status)=>{
      if(status == 'success'){
        this.alertExist = true;
        this.alertMessage = "Sign Up is successfull !";
        this.name = null;
        this.mail = null;
        this.number = null;
        this.password = null;
        this.message = "Registration is successfull!";
      }
      else{
        this.alertExist = true;
        this.alertMessage = "Something went wrong or you already have an account.";
        this.name = null;
        this.mail = null;
        this.number = null;
        this.password = null;
        this.message = "Sorry ! Something went wrong. It might be this user already exists";
      }
    },
    error =>{
        this.message = "Sorry ! Something went wrong. It might be a connection error.";
    }
    )
  }

  setRole(id: number){
    this.roleId = id;
  }

  ngOnInit(): void {
  }

}
