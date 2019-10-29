import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  liste = [
    new Film('Tarzan','Walt Disney'),
    new Film('Indian Jones', 'Warner'),
    new Film('Shutter Island','Fantome')
  ]
  constructor() { }

  ngOnInit() {
  }

}
