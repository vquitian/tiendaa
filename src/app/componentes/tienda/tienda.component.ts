import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  productos = [
    { id: 1, nombre: 'Producto 1', imagen: '../assets/images/productos/producto1.jpg' },
    { id: 2, nombre: 'Producto 2', imagen: '../assets/images/productos/producto2.jpg' },
    { id: 3, nombre: 'Producto 3', imagen: '../assets/images/productos/producto3.jpg' },
    { id: 4, nombre: 'Producto 4', imagen: '../assets/images/productos/producto4.jpg' }
  ];

  // Método que se ejecuta cuando se selecciona un producto
  onProductoSeleccionado(producto: any) {
    console.log('Producto seleccionado:', producto);
  }
}

