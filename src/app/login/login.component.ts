import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  verPassword: boolean = false;

  login() {
    const user = JSON.parse(localStorage.getItem(this.email) || '{}');

    if (user && !user.blocked) {
      if (user.password === this.password) {
        localStorage.setItem('currentUser', this.email); // con esto se almacena el usuario
        alert('Login exitoso');

      } else {
        alert('Email o contraseña incorrectos');
      }
    } else if (user && user.blocked) {
      alert('El usuario está bloqueado');
    } else {
      alert('Email no registrado');
    }
  }

  toggleVerPassword() {
    this.verPassword = !this.verPassword;
  }
}
