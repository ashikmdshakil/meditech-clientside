import { Chamber } from './../Model/Chamber.model';
import { DoctorSlotService } from './../Services/doctor-slot.service';
import { AppoinmentsService } from './../Services/appoinments.service';
import { User } from './../User.model';
import { Appoinment } from './../Model/Appoinment.model';
import { DoctorSlot } from './../Model/DoctorSlot.model';
import { ChamberServiceService } from './../Services/chamber-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appoinment-slot',
  templateUrl: './doctor-appoinment-slot.component.html',
  styleUrls: ['./doctor-appoinment-slot.component.css']
})
export class DoctorAppoinmentSlotComponent implements OnInit {
  canTakeAppoinment: boolean = false;
  canSeePatients: boolean = false;
  chamberId: number;
  router: ActivatedRoute;
  routerA: Router;
  slotService: DoctorSlotService;
  appoinmentSlots: DoctorSlot[] = [];
  appoinment: Appoinment = new Appoinment();
  user: User = new User();
  doctorSlot: DoctorSlot = new DoctorSlot();
  appoinmentService: AppoinmentsService;
  chamberService: ChamberServiceService;
  chamber: Chamber = new Chamber();
  doctor: User = new User();
  message: string;

  constructor(chamberService: ChamberServiceService,router: ActivatedRoute,routerA: Router ,slotService: DoctorSlotService, appoinmentService: AppoinmentsService) {
    this.router = router;
    this.routerA = routerA;
    this.slotService = slotService;
    this.appoinmentService = appoinmentService;
    this.chamberService = chamberService;
   }

  ngOnInit(): void {
    this.router.params.subscribe(param =>{
      this.chamberId = param.id;
      this.slotService.getSlots(this.chamberId.toString()).subscribe(result =>{
        this.appoinmentSlots = result;
      })
      })
      this.chamberService.getChamber(this.chamberId.toString()).subscribe(result =>{
          this.chamber = result;
          this.doctor = result['user'];
          console.log("This doctor's mobile Number is "+this.doctor.mobileNumber);
          
          if(localStorage.getItem('username') === this.doctor.mobileNumber){
            this.canTakeAppoinment = false;
            this.canSeePatients = true;
        }
        else{
          this.canTakeAppoinment = true;
          this.canSeePatients = false;
        }
      })
    }
  

  takeAppoinment(id, maximum_number){
    this.user.mobileNumber = localStorage.getItem("username");
    this.appoinment.user = this.user;
    this.doctorSlot.id = id;
    this.doctorSlot.maximumNumberOfAppoinment = maximum_number;
    this.appoinment.doctorSlot = this.doctorSlot;
    this.appoinmentService.takeAppoinment(this.appoinment).subscribe(result =>{
      if(result === 'success'){
          this.message = "Appoinment has been taken successfully.";
      }
      else if(result === 'overloaded'){
        this.message = "This slot is filled up. Appoinment has not been successfully.";
      }
      else if(result === 'taken'){
        this.message = "You have already taken this appoinment.";
      }
      else{
        this.message = "Sorry something went wrong. Appoinment could not be taken.";
      }
    })
  }

  seeAppoinments(id){
    this.routerA.navigateByUrl('/patient-list/'+id);
  }

}
