import { ChamberServiceService } from './../Services/chamber-service.service';
import { ChamberService } from './../Services/chamber.service';
import { User } from './../User.model';
import { UsersService } from './../Services/users.service';
import { Chamber } from './../Model/Chamber.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-chamber',
  templateUrl: './update-chamber.component.html',
  styleUrls: ['./update-chamber.component.css']
})
export class UpdateChamberComponent implements OnInit {
  message: string;
  user : User = new User();
  chamber: Chamber = new Chamber();
  chamberService: ChamberServiceService;

  constructor(chamberService : ChamberServiceService) {
    this.chamberService = chamberService;
   }

  ngOnInit(): void {
  }

  saveChamber(){
    console.log(this.chamber.name);
    this.user.mobileNumber = localStorage.getItem("username");
    this.chamber.user = this.user;
    this.chamberService.updateChamber(this.chamber).subscribe(result =>{
      if(result === 'success'){
        this.message = "Successfully created a chamber.";
      }
      else{
        this.message = "Chamber is not created. SOmething went wrong.";
      }
    })
  }

}
