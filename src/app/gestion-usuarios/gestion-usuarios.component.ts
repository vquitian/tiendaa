import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.models';
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  usuarios: Usuario[] = []; 
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit():void {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.usuarios = this.usuarioService.obtenerUsuarios(); 
  }

  
  eliminarUsuario(id: number) {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      usuario.bloqueado = true; 
      this.usuarioService.guardarUsuarios(this.usuarios); 
      this.cargarUsuarios();
    }
  }
}