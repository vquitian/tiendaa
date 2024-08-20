// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  verPassword: boolean = false;

  constructor(private router: Router) {}

  toggleVerPassword() {
    this.verPassword = !this.verPassword;
  }

  iniciarSesion() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((user: any) => user.username === this.username && user.password === this.password);

    if (usuario) {
      if (usuario.bloqueado) {
        alert('Usuario bloqueado. Contacte al administrador.');
      } else {
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));
        this.router.navigate(['/dashboard']); // Redirige al dashboard u otra ruta después del login
      }
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }
}
