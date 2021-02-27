import { UsersService } from './../Services/users.service';
import { User } from './../User.model';
import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Model/Prescription.model';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.css']
})
export class PrescriptionFormComponent implements OnInit {
  userId: number;
  patientName: string;
  doctorName: string;
  prescription: Prescription = new Prescription();
  user: User = new User();
  doctor: User = new User();
  userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userId = history.state.id;
    this.patientName = history.state.name;
    console.log("Here the user id is "+this.userId);
  }

  prescribe(){
    this.user.userId = this.userId;
    this.prescription.user = this.user;
    this.prescription.doctorName = localStorage.getItem("name");
    this.userService.saveUserPrescription(this.prescription).subscribe(result =>{
    })
    
  }
}
