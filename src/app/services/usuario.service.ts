// src/app/services/usuario.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: any[] = [
    { id: 1, nombre: 'admin', rol: 'Administrador', bloqueado: false },
    { id: 2, nombre: 'supervisor1', rol: 'Supervisor', bloqueado: false },
    { id: 3, nombre: 'agente1', rol: 'Agente', bloqueado: false },
  ];

  constructor() {
    this.cargarUsuariosEnLocalStorage();
  }

  private cargarUsuariosEnLocalStorage() {
    if (!localStorage.getItem('usuarios')) {
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
  }

  obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
  }

  guardarUsuarios(usuarios: any[]) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
