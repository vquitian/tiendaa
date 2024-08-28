import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  carouselItems: any[] = [];

  // @Output para emitir eventos al componente padre
  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    // Obtener datos del carrusel del servicio
    this.homeService.getCarouselItems().subscribe(items => {
      this.carouselItems = items;
    });
  }

  // Método para emitir un evento cuando un elemento del carrusel es seleccionado
  onItemSelect(item: any): void {
    this.itemSelected.emit(item);
  }
}
