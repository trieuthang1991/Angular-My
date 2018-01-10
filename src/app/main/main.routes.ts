import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'function', loadChildren: './function/function.module#FunctionModule' }
        ]
    }


]