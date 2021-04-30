import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: Router;
  
  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    if(localStorage.getItem('role') === 'admin'){
      this.router.navigateByUrl('/super-admin-pannel');
    }
  }

}
