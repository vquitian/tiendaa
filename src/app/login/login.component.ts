import { Component } from '@angular/core';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  verPasword: boolean = false;

  constructor() {}


  iniciarSesion() {
    // Aquí pones la lógica para iniciar sesión
    console.log('Nombre:', this.user);
    console.log('Contraseña:', this.password);
  }
}
