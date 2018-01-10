import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { FunctionComponent } from './function/function.component';
import { RolesComponent } from './roles/roles.component';

import {mainRoutes} from './main.routes'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
