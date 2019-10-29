import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  liste: Film[];
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(){
    this.liste = this.filmService.getFilms();
  }


}
