import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.cargarUsuariosDePrueba();
  }

  cargarUsuariosDePrueba() {
    const usuarios = [
      { id: 1, username: 'admin', password: 'admin123', role: 'Administrador', bloqueado: false },
      { id: 2, username: 'supervisor1', password: 'super123', role: 'Supervisor', bloqueado: false },
      { id: 3, username: 'agente1', password: 'agente123', role: 'Agente', bloqueado: false }
      ];
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
