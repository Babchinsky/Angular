import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css',
})
export class FilmComponent implements OnInit {
  imdbID: string = '';
  filmData: any;

  constructor(
    private httpService: HttpService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Получение параметра imdbID из маршрута
    this.activatedRouter.params.subscribe((params) => {
      this.imdbID = params['imdbID'];
      // Здесь вы можете использовать imdbID
      this.httpService.getMoviesByID(this.imdbID).subscribe((data: any) => {
        this.filmData = data; // Присваиваем данные, полученные от сервиса, переменной filmData
        console.log(this.filmData);
        // Установка заголовка страницы
        if (this.filmData && this.filmData.Title) {
          this.titleService.setTitle(this.filmData.Title);
        }
      });
    });
  }

  backToSearch() {
    this.router.navigate(['search']);
  }
}
