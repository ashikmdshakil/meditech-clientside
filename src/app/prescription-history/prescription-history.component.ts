import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Model/Prescription.model';

@Component({
  selector: 'app-prescription-history',
  templateUrl: './prescription-history.component.html',
  styleUrls: ['./prescription-history.component.css']
})
export class PrescriptionHistoryComponent implements OnInit {
  patientId: number;
  patientName: string;
  prescriptions: Prescription[] = [];
  userService: UsersService;

  constructor(userService: UsersService) {
      this.userService = userService;
   }

  ngOnInit(): void {
    this.patientId = history.state.id;
    this.patientName = history.state.name;
    this.userService.getUserPrescriptions(this.patientId).subscribe(result =>{
      this.prescriptions = result;
      this.prescriptions.forEach(element => {
        //console.log("patient name is "+element.user.name);
        //console.log("doctor name is "+element.doctorName);
      });
    })
  }

}
