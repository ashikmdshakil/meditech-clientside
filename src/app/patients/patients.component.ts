import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTransferService } from '../Services/user-transfer.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  users: any = [];
  userService: UsersService;
  router: Router;
  userTransfer: UserTransferService;

  constructor(userService: UsersService, router: Router, userTransfer: UserTransferService) {
    this.userService = userService;
    this.router = router;
    this.userTransfer = userTransfer;
   }

  ngOnInit(): void {
    this.userService.getAdminPatients(localStorage.getItem("username")).subscribe(
      result =>{
        this.users = result;
      }
    );
  }
  setRole(number: string){
      this.router.navigateByUrl('/admin-pannel/(setRole:blank)').then(()=>{
        this.router.navigateByUrl('/admin-pannel/(setRole:role)',{ state: { number: number }});
      })
  }
  delete(number : string){
      this.router.navigateByUrl('/admin-pannel/(setRole:blank)').then(()=>{
      this.router.navigateByUrl('/admin-pannel/(setRole:confirm)',{ state: { number: number }});
    })
  }
  refresh(){
    this.router.navigateByUrl('/admin-pannel/refresh').then(()=>{
      this.router.navigateByUrl('/admin-pannel');
    })
  }


}
