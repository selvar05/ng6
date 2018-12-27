import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {DetailsComponent} from './details/details.component';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
