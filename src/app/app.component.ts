import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { email: 'carlos@gmail.com', password: 'carlos123', role: 'administrador', blocked: false },
    { email: 'estela@gmail.com', password: 'estela123', role: 'supervisor', blocked: false },
    { email: 'esteban@gmail.com', password: 'esteban123', role: 'agente', blocked: false },
    { email: 'sara@gmail.com', password: 'sara123', role: 'cliente', blocked: false }
  ];

  constructor() {
    this.preloadUsers();
  }

  preloadUsers() {
    this.users.forEach(user => {
      localStorage.setItem(user.email, JSON.stringify(user));
    });
  }
}

