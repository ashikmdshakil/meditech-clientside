import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { resourceUsage } from 'node:process';
import { SuperAdminDashboardComponent } from '../super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  id: number;
  activatedRoute: ActivatedRoute;
  superAdminService: SuperAdminService;
  feedbacks: any = [];

  constructor(activatedRoute: ActivatedRoute, superAdminService: SuperAdminService) {
    this.activatedRoute = activatedRoute;
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result =>{
      this.id = result.id;
    })
    this.superAdminService.getFeedbacks(this.id.toString()).subscribe(result =>{
      this.feedbacks = result;
    })

  }

}
