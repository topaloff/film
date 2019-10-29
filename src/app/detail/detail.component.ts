import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() film:Film;
  constructor() { }

  ngOnInit() {
  }

  like(){
    this.film.like ++;
  }
  dislike(){
    this.film.like --;
  }
}
