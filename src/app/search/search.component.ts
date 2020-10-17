import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  mobileNumber: string;
  user: User = new User();
  userService: UsersService;
  router: Router;

  constructor(userService: UsersService, router: Router) {
      this.userService = userService;
      this.router = router;
   }

  ngOnInit(): void {
  }
  search(){
    this.userService.getUser(this.mobileNumber).subscribe(response =>{
      this.user = JSON.parse(response);
    })
  }
  clear(){
    this.user.userId = null;
    this.user.name = null;
    this.user.email = null;
    this.user.mobileNumber = null;
    this.user.password = null;
    this.user.roles = null;
    this.mobileNumber = null;
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

}
