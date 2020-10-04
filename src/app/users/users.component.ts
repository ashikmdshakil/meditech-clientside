import { User } from './../User.model';
import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      result =>{
        this.users = result;
      }
    );
  }

}
