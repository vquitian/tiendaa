// src/app/services/usuario.service.ts
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios:Usuario[] = [
    { id: 1, nombre: 'admin', rol: 'Administrador', bloqueado: false },
    { id: 2, nombre: 'supervisor1', rol: 'Supervisor', bloqueado: false },
    { id: 3, nombre: 'agente1', rol: 'Agente', bloqueado: false },
  ];

  constructor() {
    this.cargarUsuarios();
  }

  private cargarUsuarios() {
    if (!localStorage.getItem('usuarios')) {
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
  }

  obtenerUsuarios(): Usuario {
    return JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario;
  }

  guardarUsuarios(usuarios: Usuario[]) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
