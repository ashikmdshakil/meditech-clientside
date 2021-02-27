import { AppoinmentsService } from './../Services/appoinments.service';
import { Component, OnInit } from '@angular/core';
import { Appoinment } from '../Model/Appoinment.model';
import { Chamber } from '../Model/Chamber.model';

@Component({
  selector: 'app-my-appoinments',
  templateUrl: './my-appoinments.component.html',
  styleUrls: ['./my-appoinments.component.css']
})
export class MyAppoinmentsComponent implements OnInit {
  appoinmentService: AppoinmentsService;
  appoinments: Appoinment[] = [];
  chamber: Chamber = new Chamber();

  constructor(appoinmentService: AppoinmentsService) {
    this.appoinmentService = appoinmentService;
   }

  ngOnInit(): void {
    this.appoinmentService.myAppoinments(localStorage.getItem("username")).subscribe(result =>{
      console.log(result);
      this.appoinments = result;
      this.appoinments.forEach(appoinment => {
        console.log("Chamber name is "+appoinment.doctorSlot.chamber.name);
        console.log("Chamber name is "+appoinment.doctorSlot.chamber.user.name);
        console.log("start time is "+ appoinment.doctorSlot.startTime);
        console.log("end time "+appoinment.doctorSlot.endTime);
      });
      //this.appoinment = result;
      //this.chamber = this.appoinment.doctorSlot.chamber;
      //console.log(this.chamber.name);    
    })
  }

}
