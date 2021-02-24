import { UserAvatar } from './../UserAvatar.model';
import { UsersService } from './../Services/users.service';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from './../User.model';
import { UserTransferService } from './../Services/user-transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  userTransferService: UserTransferService;
  domSanitizer: DomSanitizer;
  userSrvice: UsersService;
  user: User = new User();

  constructor(userTransferService: UserTransferService, domSanitizer: DomSanitizer, userService: UsersService) {
    this.userTransferService = userTransferService;
    this.domSanitizer = domSanitizer;
    this.userSrvice = userService;
   }

  ngOnInit(): void {
    this.userSrvice.getUser(localStorage.getItem("username")).subscribe(result =>{
      this.user = result;
      this.user.userAvatar.image = this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+this.user.userAvatar.image);
    })
  }
}
