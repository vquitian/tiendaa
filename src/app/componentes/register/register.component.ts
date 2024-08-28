import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  rol: string = 'cliente';

  constructor(private router: Router) {}

  registrarUsuario() {
    // Verifica que todos los campos estén llenos
    if (!this.email || !this.password || !this.rol) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Recupera los usuarios almacenados en el localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verifica si ya existe un usuario con el mismo email
    const usuarioExistente = usuarios.find((usuario: any) => usuario.email === this.email);
    if (usuarioExistente) {
      alert('Ya existe un usuario con este email.');
      return;
    }

    // Crea un nuevo objeto usuario
    const nuevoUsuario = {
      email: this.email,
      password: this.password,
      rol: this.rol,
      bloqueado: false // El usuario se registra como no bloqueado por defecto
    };

    // Agrega el nuevo usuario al array de usuarios
    usuarios.push(nuevoUsuario);

    // Guarda el array actualizado en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Redirige al login o a otra página después del registro
    alert('Usuario registrado exitosamente.');
    this.router.navigate(['/login']);
  }
}

