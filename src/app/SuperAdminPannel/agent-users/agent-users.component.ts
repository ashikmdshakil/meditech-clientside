import { SuperAdminService } from './../super-admin.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-users',
  templateUrl: './agent-users.component.html',
  styleUrls: ['./agent-users.component.css']
})
export class AgentUsersComponent implements OnInit {

  patient: User = new User();
  patients: User[] = [];
  superAdminService: SuperAdminService;
  aRoute: ActivatedRoute;
  number: string;

  constructor(superAdminService: SuperAdminService, aRoute: ActivatedRoute) {
    this.superAdminService = superAdminService;
    this.aRoute = aRoute;
   }

  ngOnInit(): void {
    this.aRoute.params.subscribe(param =>{
      this.number = param.number;
    })

    this.superAdminService.getAgentUsers(this.number).subscribe(result =>{
      result.forEach(element => {
        let patient = new User();
        patient.userId = element[0];
        patient.name = element[1];
        patient.mobileNumber = element[2];
        patient.email = element[3];
        this.patients.push(patient);
      });
    })
  }

}
 