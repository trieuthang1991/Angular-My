import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {Routes,RouterModule} from '@angular/router';


export const userRoutes :Routes=[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index', component:UsersComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
