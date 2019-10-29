import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private filmService: FilmService) { }

  ngOnInit() {
  }
  Submit(f){
    //f correspond au formulaire
    this.filmService.addFilm(f);
    //f.reset(); //Pour remettre le formulaire a zero
    this.router.navigate(['/liste']) // Pour naviguer vers la liste
  }
}
