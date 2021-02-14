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
  userTransferService: UserTransferService;

  constructor(router: Router, userTransferService: UserTransferService) {
    this.router = router;
    this.userTransferService = userTransferService;
   }

  ngOnInit(): void {
      this.userTransferService.getUserByNumber(localStorage.getItem("username"));
  }

  getDoctorDetails(){
    this.router.navigateByUrl('/doctor-dashboard/(details:doctor-details)');
  }
  getDoctorChambers(){
    this.router.navigateByUrl('/doctor-dashboard/(details:doctor-chambers)');
  }

}
