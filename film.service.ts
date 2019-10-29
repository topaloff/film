import { Injectable } from '@angular/core';
import { Film } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  liste: Film[] = [
    new Film('Tarzan','Walt Disney'),
    new Film('Indian Jones', 'Warner'),
    new Film('Shutter Island','Fantome')
  ]
  constructor() { }

  getFilms(){
    return this.liste;
  }
  deleteFilm(i){
    this.liste.splice(i,1);
  }
}
