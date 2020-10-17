import { UsersService } from './../Services/users.service';
import { LogoutService } from './../logout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logoutService: LogoutService;
  router: Router;
  userService: UsersService;
  user: User = new User();
  constructor(logoutService: LogoutService, router: Router, userService: UsersService) {
    this.logoutService = logoutService;
    this.router = router;
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('username')).subscribe(result =>{
      this.user = JSON.parse(result);
    })
  }
  logout(){
    this.logoutService.doLogout().subscribe(
      result=>{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role');
        console.log(result);
        console.log(localStorage.getItem('username'));
      })
      this.router.navigateByUrl('/home/(nav:refresh)').then(()=>{
        this.router.navigateByUrl('/home');
      })
    } 
  }
  
