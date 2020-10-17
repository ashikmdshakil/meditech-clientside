import { async } from '@angular/core/testing';
import { UsersService } from './../Services/users.service';
import { RolesService } from './../Services/roles.service';
import { map } from 'rxjs/operators';
import { UserTransferService } from './../Services/user-transfer.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User.model';
import { Role } from '../Role.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  systemRoles: any = [];
  updatedRoles: Role[] = [];
  user: User = new User();
  userService: UsersService;
  roleService: RolesService;
  role: Role = new Role();

  router: Router;

  constructor(userService: UsersService, roleService: RolesService, router: Router) {
      this.userService = userService;
      this.roleService = roleService;
      this.router = router;
   }

  ngOnInit(): void {
    this.userService.getUser(history.state.number).subscribe((response)=>{
      this.user = JSON.parse(response);
    })

    this.roleService.getSystemRoles().subscribe(result =>{
      this.systemRoles = result;
    })
    }

  handleChange(id,event){
    if(event.target.checked){
      this.role.roleId = id;
      this.user.roles = this.role;
    }
  }
  async assignRole(number: String){
    this.roleService.updateUserRole(this.user).subscribe(response =>{
      console.log(response);
      this.router.navigateByUrl('/admin-pannel/(setRole:blank)').then(()=>{
        this.router.navigateByUrl('/admin-pannel/(setRole:role)',{ state: { number: number }});
    })
    
    })
}
  close(){
    this.router.navigateByUrl('/admin-pannel/(setRole:blank)')
  }
}
