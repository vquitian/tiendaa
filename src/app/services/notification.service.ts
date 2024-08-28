
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  notificaciones: any[] = [];

  mostrarNotificacion(mensaje: string, tipo: 'success' | 'error' | 'info', duracion: number = 5000) {
    const notificacion = { mensaje, tipo, duracion };
    this.notificaciones.push(notificacion);
    setTimeout(() => {
      this.notificaciones.shift();
    }, duracion);
  }

  obtenerNotificaciones() {
    return this.notificaciones;
  }
}
