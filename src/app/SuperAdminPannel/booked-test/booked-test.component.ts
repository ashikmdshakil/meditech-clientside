import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperAdminDashboardComponent } from '../super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-booked-test',
  templateUrl: './booked-test.component.html',
  styleUrls: ['./booked-test.component.css']
})
export class BookedTestComponent implements OnInit {

  superAdminService: SuperAdminService;
  bookedTests: any = [];
  diagnostics: any = [];

  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getAllBooking().subscribe(result =>{
        this.bookedTests = result;
    })
    this.superAdminService.findAllDiagnostics().subscribe(result =>{
        this.diagnostics = result;
    })
  }

  tests(number : string){
    window.open("/tests/"+number,"_blank");
  }

  showBookings(id: number){
    this.superAdminService.getAllBookingById(id.toString()).subscribe(result =>{
      this.bookedTests = result;
    })
  }

}
