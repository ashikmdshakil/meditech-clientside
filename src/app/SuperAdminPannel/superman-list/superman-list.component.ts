import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-superman-list',
  templateUrl: './superman-list.component.html',
  styleUrls: ['./superman-list.component.css']
})
export class SupermanListComponent implements OnInit {
  superAdminService: SuperAdminService;
  supermen: User[] = [];
  constructor(superAdminService: SuperAdminService) {
    this.superAdminService = superAdminService;
   }

  ngOnInit(): void {
    this.superAdminService.getSupermen().subscribe(result =>{
      this.supermen = result;
      console.log(result);
    })
  }
}
