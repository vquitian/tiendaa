import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

 
  getCarouselItems(): Observable<any[]> {
    const items = [
      { id: 1, imageUrl: 'https://via.placeholder.com/800x400?text=Primera+Imagen', caption: 'Primera Imagen', description: 'Descripción de la primera imagen.' },
      { id: 2, imageUrl: 'https://via.placeholder.com/800x400?text=Segunda+Imagen', caption: 'Segunda Imagen', description: 'Descripción de la segunda imagen.' },
      { id: 3, imageUrl: 'https://via.placeholder.com/800x400?text=Tercera+Imagen', caption: 'Tercera Imagen', description: 'Descripción de la tercera imagen.' }
    ];
    return of(items);
  }
}
