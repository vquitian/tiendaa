import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  mostrarNotificacion(mensaje: string, tipo: 'success' | 'error' | 'info', posicion: 'top' | 'bottom' | 'left' | 'right', duracion: number = 3000): void {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo} ${posicion}`;
    notificacion.innerText = mensaje;
    
    document.body.appendChild(notificacion);

    if (duracion > 0) {
      setTimeout(() => {
        document.body.removeChild(notificacion);
      }, duracion);
    }
  }
}
