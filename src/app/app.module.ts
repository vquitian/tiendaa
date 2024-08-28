// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';


@NgModule({
  
  declarations: [				
    AppComponent,
    LoginComponent,
      HomeComponent,
      NotificacionesComponent,
      GestionUsuariosComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class    AppModule { }
