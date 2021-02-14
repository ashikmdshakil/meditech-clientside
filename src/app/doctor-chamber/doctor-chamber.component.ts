import { UserTransferService } from './../Services/user-transfer.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';

@Component({
  selector: 'app-doctor-chamber',
  templateUrl: './doctor-chamber.component.html',
  styleUrls: ['./doctor-chamber.component.css']
})
export class DoctorChamberComponent implements OnInit {
  userTransferService: UserTransferService;

  constructor(userTransferService: UserTransferService) {
    this.userTransferService = userTransferService;
   }

  ngOnInit(): void {
    console.log("this is chamber component and it's doctor's name is "+this.userTransferService.user.name);
  }

}
