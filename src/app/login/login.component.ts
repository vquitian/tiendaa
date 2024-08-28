import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = '';
  contraseña: string = '';
  verContraseña: boolean = false;

  constructor() {}

  iniciarSesion() {
    // Aquí pones la lógica para iniciar sesión
    console.log('Nombre:', this.nombre);
    console.log('Contraseña:', this.contraseña);
  }
}
