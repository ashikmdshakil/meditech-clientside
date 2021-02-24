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
  doctorSlot: DoctorSlot = new DoctorSlot();
  doctorSlotService: DoctorSlotService;
  userService: UsersService;
  chamberList: Chamber[] = [];
  chamber: Chamber = new Chamber();
  user: User = new User();

  constructor(doctorSlotService: DoctorSlotService, userService: UsersService) {
    this.doctorSlotService = doctorSlotService;
    this.userService = userService;
   }

  ngOnInit(): void {
      this.userService.getUser(localStorage.getItem("username")).subscribe(result =>{
        this.chamberList = result["chambers"];
        this.chamberList.forEach(element => {
          console.log(element.name);
        });
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
    
    })

  }
 

}
