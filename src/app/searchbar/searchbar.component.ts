import { User } from './../User.model';
import { SearchbarService } from './../Services/searchbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchService: SearchbarService;
  users: User[] = [];
  constructor(searchService: SearchbarService) {
    this.searchService = searchService;
   }

  ngOnInit(): void {
  }
  onSearchChange(event){
    let keyWord = event.target.value;
    this.searchService.searchDoctors(keyWord).subscribe(result =>{
      this.users = result;
      this.users.forEach(element => {
        console.log("Doctor Id is "+element.userId+" and name is "+element.name);
      });
    })
  }

}
