import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  contrasena: string = '';
  verPasword: boolean = false;
  mostrarFormulario: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const formElement = document.querySelector('.card-body');
    fromEvent(window, 'load')
      .pipe(
        map(() => {
          this.mostrarFormulario = true;
        })
      )
      .subscribe();
  }

  iniciarSesion(): void {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuarios.find((u: any) => u.user === this.user && u.contrasena === this.contrasena);

    if (usuarioEncontrado && !usuarioEncontrado.bloqueado) {
      // Guardar sesión en localStorage
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));

      // Redirigir al Home
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos, o el usuario está bloqueado.');
    }
  }
}
