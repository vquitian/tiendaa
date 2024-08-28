import { NgModule } from '@angular/core';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GestionUsuariosComponent } from './componentes/gestion-usuarios/gestion-usuarios.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/login', pathMatch: 'full' }, 
    { path: 'home', component:HomeComponent},
    { path: 'gestionar-usuario', component:GestionUsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [] 
})




  export class AppRoutingModule { }
  
