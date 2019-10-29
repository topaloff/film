import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() film:Film;
  @Input() i:number;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  like(){
    this.film.like ++;
  }
  dislike(){
    this.film.like --;
  }
  
  deleteFilm(i){
    this.filmService.deleteFilm(i);
  }
}
