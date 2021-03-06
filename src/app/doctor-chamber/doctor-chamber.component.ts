import { ChamberService } from './../Services/chamber.service';
import { UsersService } from './../Services/users.service';
import { UserTransferService } from './../Services/user-transfer.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { Chamber } from '../Model/Chamber.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-chamber',
  templateUrl: './doctor-chamber.component.html',
  styleUrls: ['./doctor-chamber.component.css']
})
export class DoctorChamberComponent implements OnInit {
  doctorName: string;
  chambers :Chamber[] = [];
  userTransferService: UserTransferService;
  userService: UsersService;
  router : Router;

  constructor(userTransferService: UserTransferService, userService: UsersService, router: Router) {
    this.userTransferService = userTransferService;
    this.userService = userService;
    this.router = router;
   }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem("username")).subscribe(result =>{
      console.log(result);
      this.chambers = result['chambers'];
      this.doctorName = result['name'];
      console.log("This Doctor's name is "+this.doctorName);
    }) 
  }

  slotList(id){
    this.router.navigateByUrl('/doctor-appoinment-slot/'+id);
  }

  seeAppoinments(id){
    
  }

}
