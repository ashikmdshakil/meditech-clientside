import { LogoutService } from './../logout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logoutService: LogoutService;
  constructor(logoutService: LogoutService) {
    this.logoutService = logoutService;
   }

  ngOnInit(): void {
  }
  logout(){
    this.logoutService.doLogout().subscribe(
      result=>{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        console.log(result);
      }
    );
  }

}
