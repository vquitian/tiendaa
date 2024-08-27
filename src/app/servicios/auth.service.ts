import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios = [
    { id: 1, nombre: 'Admin', rol: 'Administrador', password: '1234', activo: true, bloqueado: false },
    { id: 2, nombre: 'Supervisor', rol: 'Supervisor', password: '1234', activo: true, bloqueado: false },
    { id: 3, nombre: 'Agente', rol: 'Agente', password: '1234', activo: true, bloqueado: false },
    { id: 4, nombre: 'Cliente', rol: 'Cliente', password: '1234', activo: true, bloqueado: false },
  ];

  constructor() { 
    this.cargarUsuariosEnLocalStorage();
  }

  cargarUsuariosEnLocalStorage() {
    if (!localStorage.getItem('usuarios')) {
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
  }

  obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
  }

  actualizarUsuarios(usuarios: any[]) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
