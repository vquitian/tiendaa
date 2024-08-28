import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  // Recibe el array de productos desde el componente padre
  @Input() productos: any[] = [];

  // Emite un evento cuando se selecciona un producto
  @Output() productoSeleccionado: EventEmitter<any> = new EventEmitter();

  seleccionarProducto(producto: any) {
    this.productoSeleccionado.emit(producto);
  }
}
