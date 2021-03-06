import { ChamberService } from './../Services/chamber.service';
import { ChamberServiceService } from './../Services/chamber-service.service';
import { UsersService } from './../Services/users.service';
import { DoctorSlotService } from './../Services/doctor-slot.service';
import { DoctorSlot } from './../Model/DoctorSlot.model';
import { Component, OnInit } from '@angular/core';
import { Chamber } from '../Model/Chamber.model';
import { User } from '../User.model';

@Component({
  selector: 'app-update-slots',
  templateUrl: './update-slots.component.html',
  styleUrls: ['./update-slots.component.css']
})
export class UpdateSlotsComponent implements OnInit {
  message: string;
  doctorSlot: DoctorSlot = new DoctorSlot();
  doctorSlotService: DoctorSlotService;
  chamberService: ChamberServiceService;
  chamberList: Chamber[] = [];
  chamber: Chamber = new Chamber();
  user: User = new User();

  constructor(doctorSlotService: DoctorSlotService, chamberService: ChamberServiceService) {
    this.doctorSlotService = doctorSlotService;
    this.chamberService = chamberService;
   }

  ngOnInit(): void {
      this.chamberService.getChambers().subscribe(result =>{
        this.chamberList = result;
      })

  }
  getChamber(id: number, name: string){
    this.chamber.id = id;
    this.chamber.name = name;
  }
  saveDoctorSlots(){
    console.log(this.doctorSlot.startTime);
    this.doctorSlot.chamber = this.chamber;
    this.user.mobileNumber = localStorage.getItem("username");
    this.doctorSlot.user = this.user;
    this.doctorSlotService.updateDoctorSlots(this.doctorSlot).subscribe(result =>{
      if(result === 'success'){
        this.message = "Slot has been updated sucessfully .";
      }
      else{
        this.message = "Slot has not been updated. Something went wrong.";
      }
    })

  }
 

}
