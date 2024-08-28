// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NotificacionesComponent } from './componentes/notificaciones/notificaciones.component';
import { HomeComponent } from './componentes/home/home.component';
import { AppComponent } from './app.component';
@NgModule({
  
  declarations: [				
    AppComponent,
    LoginComponent,
      HomeComponent,
      NotificacionesComponent,
      NavbarComponent
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
