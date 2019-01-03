import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {DetailsComponent} from './details/details.component';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import { IpdetailsComponent } from './ipdetails/ipdetails.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'edit-user',
    component:EditUserComponent
  },
  {
    path:'list-user',
    component:ListUserComponent
  },
  {
  path:'edit-user',
  component:EditUserComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'ipdetails',
    component:IpdetailsComponent
  },
  {
    path:'smarttable',
    component:SmartTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
