import { BlankComponent } from './blank/blank.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { RoleComponent } from './role/role.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo : "home", pathMatch: 'full'},
  {path : "home", 
  component : HomeComponent,
  children : [
    {path : "signup", component : SignupComponent},
    {path : "login", component : LoginComponent},
    {path : "", component : LoginComponent}
  ]
},
{path: "admin-pannel", component: AdminPannelComponent,
    children: [
      {path: "" ,component: UsersComponent},
      {path: "blank", component: BlankComponent, outlet: 'setRole'},
      {path: "blank", component: BlankComponent, outlet: 'setRole'},
      {path: "role", component: RoleComponent, outlet: 'setRole'},
      {path: "confirm", component: ConfirmComponent, outlet: 'setRole'}
    ]
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
