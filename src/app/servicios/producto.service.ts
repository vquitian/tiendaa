import { Injectable } from '@angular/core';
import { Producto } from '../productos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 100, imagenUrl: '' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 200, imagenUrl: ''}
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
}

