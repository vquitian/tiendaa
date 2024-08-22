import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  verPassword: boolean = false;

  constructor(private router: Router) {}

  iniciarSesion() {
   
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuarios.find((usuario: any) => usuario.email === this.email && usuario.password === this.password);

    if (usuarioEncontrado) {
      if (usuarioEncontrado.bloqueado) {
        alert('Usuario bloqueado. Contacta al administrador.');
      } else {
        localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
    
        this.router.navigate(['/dashboard']);
      }
    } else {
      alert('Email o contraseña incorrectos.');
    }
  }

  toggleVerPassword() {
    this.verPassword = !this.verPassword;
  }
}
