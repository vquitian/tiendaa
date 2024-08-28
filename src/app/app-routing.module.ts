import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes } from '@angular/router';
import { NgModel } from '@angular/forms';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/login', pathMatch: 'full' } 

];

@NgModule({
  
  })
  export class AppRoutingModule { }
  
