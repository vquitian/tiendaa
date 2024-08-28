import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

 
  getCarouselItems(): Observable<any[]> {
    const items = [
      { id: 1, imageUrl: '', caption: 'Primera Imagen', description: 'Descripción de la primera imagen.' },
      { id: 2, imageUrl: '', caption: 'Segunda Imagen', description: 'Descripción de la segunda imagen.' },
      { id: 3, imageUrl: '', caption: 'Tercera Imagen', description: 'Descripción de la tercera imagen.' }
    ];
    return of(items);
  }
}
