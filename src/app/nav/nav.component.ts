import { UserTransferService } from './../Services/user-transfer.service';
import { DomSanitizer } from '@angular/platform-browser';
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
  imageUrl: any;
  domSanitizer: DomSanitizer;
  userTransferService: UserTransferService;

  constructor(logoutService: LogoutService, router: Router, userService: UsersService, domSanitizer: DomSanitizer, userTransferService: UserTransferService) {
    this.logoutService = logoutService;
    this.router = router;
    this.userService = userService;
    this.domSanitizer = domSanitizer;
    this.userTransferService = userTransferService;
   }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('username')).subscribe(result =>{
      this.user = result;
      localStorage.setItem("name", this.user.name);
      let image = 'data:image/png;base64, '+this.user.userAvatar.image;
      this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(image);
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
      localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role');
        this.router.navigateByUrl('/home/(nav:refresh)').then(()=>{
        this.router.navigateByUrl('/home');
      })
    } 

    routeProfile(){
      if(localStorage.getItem('role') === 'doctor'){
        this.router.navigateByUrl('/profile/(profile-form:doctor-profile)');
      }
      else{
        this.router.navigateByUrl('/profile/(profile-form:user-profile)');
      }
      
    }
    seeDashboard(){
      //this.userTransferService.number = localStorage.getItem("username");
      this.router.navigateByUrl('/doctor-dashboard');
    }

    myAppoinments(){
      this.router.navigateByUrl('/my-appoinments');
    }
  }
  
