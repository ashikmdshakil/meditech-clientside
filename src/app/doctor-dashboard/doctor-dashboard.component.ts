import { User } from './../User.model';
import { UsersService } from './../Services/users.service';
import { UserTransferService } from './../Services/user-transfer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  router: Router;

  constructor(router: Router) {
    this.router = router;
    
  }

  ngOnInit(): void {
    
  }

  getDoctorDetails(){
    this.router.navigateByUrl('/doctor-dashboard/(details:doctor-details)');
  }
  getDoctorChambers(){
    this.router.navigateByUrl('/doctor-dashboard/(details:doctor-chambers)');
  }
  updateDoctorChamber(){
    this.router.navigateByUrl('/doctor-dashboard/(details:update-chambers)');
  }
  updateSlots(){
    this.router.navigateByUrl('/doctor-dashboard/(details:update-slots)');
  }

}
