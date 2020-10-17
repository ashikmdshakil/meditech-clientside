import { UserTransferService } from './../Services/user-transfer.service';
import { User } from './../User.model';
import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { Role } from '../Role.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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
    this.userService.getUsers().subscribe(
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
