import { User } from './../User.model';
import { UserTransferService } from './../Services/user-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  userTransferService: UserTransferService;

  constructor(userTransferService: UserTransferService) {
    this.userTransferService = userTransferService;
   }

  ngOnInit(): void {
    console.log("This doctor's name is "+this.userTransferService.user.name);
  }

}
