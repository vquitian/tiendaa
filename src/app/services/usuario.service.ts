// src/app/servicios/usuario.service.ts
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'felipe', rol: 'Administrador', bloqueado: false, password: 'admin123' },
    { id: 2, nombre: 'jorge', rol: 'Supervisor', bloqueado: false, password: 'supervisor123' },
    { id: 3, nombre: 'estela', rol: 'Agente', bloqueado: false, password: 'agente123' },
  ];

  constructor() {
    this.cargarUsuarios();
  }

  private cargarUsuarios(): void {
    if (!localStorage.getItem('usuarios')) {
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
  }

  obtenerUsuarios(): Usuario[] {
    return JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];
  }

  guardarUsuarios(usuarios: Usuario[]): void {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  autenticar(nombre: string, contraseña: string): Usuario | null {
    const usuarios = this.obtenerUsuarios();
    const usuario = usuarios.find(u => u.nombre === nombre && u.password === contraseña);

    if (usuario && !usuario.bloqueado) {
      return usuario;
    } else {
      return null;
    }
  }

  bloquearUsuario(id: number, estado: boolean): void {
    const usuarios = this.obtenerUsuarios();
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
      usuario.bloqueado = estado;
      this.guardarUsuarios(usuarios);
    }
  }

  registrarUsuario(nuevoUsuario: Usuario): boolean {
    const usuarios = this.obtenerUsuarios();

    // Validar que no exista un usuario con el mismo nombre
    if (usuarios.find(u => u.nombre === nuevoUsuario.nombre)) {
      return false; // Ya existe un usuario con ese nombre
    }

    // Asignar un ID único
    nuevoUsuario.id = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

    
    usuarios.push(nuevoUsuario);
    this.guardarUsuarios(usuarios);
    return true;
  }
}
