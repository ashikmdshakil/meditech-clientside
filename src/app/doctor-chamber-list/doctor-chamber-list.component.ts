import { UsersService } from './../Services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chamber } from '../Model/Chamber.model';

@Component({
  selector: 'app-doctor-chamber-list',
  templateUrl: './doctor-chamber-list.component.html',
  styleUrls: ['./doctor-chamber-list.component.css']
})
export class DoctorChamberListComponent implements OnInit {
  doctorName: string;
  router: ActivatedRoute;
  routerA: Router;
  userService: UsersService;
  chambers: Chamber[] = [];

  constructor(router: ActivatedRoute, userService: UsersService, routerA: Router) {
    this.router = router;
    this.routerA = routerA;
    this.userService = userService;
   }

  ngOnInit(): void {
    this.router.params.subscribe(param =>{
      this.userService.getUserById(param.id).subscribe(result =>{
        console.log(result);
        this.chambers = result["chambers"];
        this.doctorName = result['name'];
      })
    })
  }

  seeSlots(id){
    console.log("This chamber id is "+ id);
    this.routerA.navigateByUrl('/doctor-appoinment-slot/'+id);
  }

}
