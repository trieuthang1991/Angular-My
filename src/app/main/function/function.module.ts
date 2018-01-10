import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function.component';
import { Routes,RouterModule } from '@angular/router';

const functionRoutes:Routes=[
    {path:'', redirectTo:'index',pathMatch:'full'},
    {path:'index', component:FunctionComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(functionRoutes)
  ],
  declarations: [FunctionComponent]
})
export class FunctionModule { }
