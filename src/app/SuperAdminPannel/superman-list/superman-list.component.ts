import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AddressBook } from 'src/app/AddressBook.model';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/User.model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-superman-list',
  templateUrl: './superman-list.component.html',
  styleUrls: ['./superman-list.component.css']
})
export class SupermanListComponent implements OnInit {
  imageUrl: any;
  message: string;
  superAdminService: SuperAdminService;
  supermen: User[] = [];
  doctor: User = new User();
  selectedSuperman: User = new User();
  domSanitizer: DomSanitizer;

  agent: User = new User();
  addressBook: AddressBook = new AddressBook();
  registrationService: RegistrationService;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer, registrationService: RegistrationService) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
    this.registrationService = registrationService;
   }

  ngOnInit(): void {
    this.superAdminService.getSupermen().subscribe(result =>{
      this.supermen = result;
    })
  }

  userInfo(number: string){
    this.supermen.forEach(superman => {
        if(superman.mobileNumber === number){
          this.selectedSuperman = null;
          this.selectedSuperman = superman;
        }
    });
  }

  userDetails(number : string){
    window.open("/user-details/"+number,"_blank");
  }

  archiveUser(){
    this.message = null;
    this.superAdminService.deleteUser(this.selectedSuperman).subscribe(result =>{
      if(result === "archived"){
        this.message = "This user has been removed.";
      }
      else if(result === "activated"){
        this.message = "This user has been activated again!";
      }
      else if(result === "failed"){
        this.message = "Sorry Something went wrong.";
      }
    },
    error =>{
      this.message = "Sorry something went wrong. It might be connection problem with server.";
    }
    )
  }

  registerUser(){
    this.agent.addressBooks = this.addressBook;
    this.registrationService.registerSupermanDetails(this.agent).subscribe(result =>{
      if(result === "success"){
        this.message = "Registration is successfull";
      }
      else{
        this.message = "Sorry ! Something went wrong.";
      }
    }),
    error =>{
      this.message = "Soory! something went wrong. It might be a connection error";
    }
  }
}
