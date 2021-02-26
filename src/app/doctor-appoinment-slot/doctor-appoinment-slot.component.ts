import { DoctorSlotService } from './../Services/doctor-slot.service';
import { AppoinmentsService } from './../Services/appoinments.service';
import { User } from './../User.model';
import { Appoinment } from './../Model/Appoinment.model';
import { DoctorSlot } from './../Model/DoctorSlot.model';
import { ChamberServiceService } from './../Services/chamber-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appoinment-slot',
  templateUrl: './doctor-appoinment-slot.component.html',
  styleUrls: ['./doctor-appoinment-slot.component.css']
})
export class DoctorAppoinmentSlotComponent implements OnInit {
  chamberId: number;
  router: ActivatedRoute;
  slotService: DoctorSlotService;
  appoinmentSlots: DoctorSlot[] = [];
  appoinment: Appoinment = new Appoinment();
  user: User = new User();
  doctorSlot: DoctorSlot = new DoctorSlot();
  appoinmentService: AppoinmentsService;

  constructor(router: ActivatedRoute, slotService: DoctorSlotService, appoinmentService: AppoinmentsService) {
    this.router = router;
    this.slotService = slotService;
    this.appoinmentService = appoinmentService;
   }

  ngOnInit(): void {
    this.router.params.subscribe(param =>{
      console.log("chamber id is "+param.id);
      this.chamberId = param.id;
      this.slotService.getSlots(this.chamberId.toString()).subscribe(result =>{
        this.appoinmentSlots = result;
        console.log(this.appoinmentSlots);
      })
      })
    }
  

  takeAppoinment(id){
    this.user.mobileNumber = localStorage.getItem("username");
    this.appoinment.user = this.user;
    this.doctorSlot.id = id;
    this.appoinment.doctorSlot = this.doctorSlot;
    this.appoinmentService.takeAppoinment(this.appoinment).subscribe(result =>{
      
    })
  }

}
