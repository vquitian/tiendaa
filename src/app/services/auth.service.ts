import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  autenticar(nombre: string, contraseña: string) {
    const usuarios = this.usuarioService.obtenerUsuarios();
    const usuario = usuarios.find(u => u.nombre === nombre && u.contraseña === contraseña);
    if (usuario && !usuario.bloqueado) {
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  estaAutenticado() {
    return !!localStorage.getItem('usuarioLogueado');
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
  }
}
