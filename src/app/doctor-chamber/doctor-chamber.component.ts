import { ChamberService } from './../Services/chamber.service';
import { UsersService } from './../Services/users.service';
import { UserTransferService } from './../Services/user-transfer.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { Chamber } from '../Model/Chamber.model';

@Component({
  selector: 'app-doctor-chamber',
  templateUrl: './doctor-chamber.component.html',
  styleUrls: ['./doctor-chamber.component.css']
})
export class DoctorChamberComponent implements OnInit {
  chambers :Chamber[] = [];
  userTransferService: UserTransferService;
  userService: UsersService;

  constructor(userTransferService: UserTransferService, userService: UsersService) {
    this.userTransferService = userTransferService;
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem("username")).subscribe(result =>{
      this.chambers = result['chambers'];
      this.chambers.forEach(element => {
        console.log(element.name);
      });
    })
    
  }

}
