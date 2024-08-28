import { Component, OnInit } from '@angular/core';
import { NotificacionService} from 'src/app/services/notification.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  notificaciones: any
 
  constructor(private notificacionService: NotificacionService) {}

  ngOnInit() {
    this.notificaciones = this.notificacionService.obtenerNotificaciones();
  }
}