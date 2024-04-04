import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTitle: string = '';
  searchType: string = 'movie';
  formTouched: boolean = false; // Переменная для отслеживания того, была ли форма когда-либо касалась
  movies: any[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Установка заголовка страницы
    this.titleService.setTitle('Search');
  }

  onSubmit() {
    this.httpService.getMovies(this.searchTitle, this.searchType).subscribe(
      (data: any) => {
        if (data && data.Search) {
          this.movies = data.Search;
          console.log(this.movies);
        } else {
          this.movies = [];
        }
      },
      (error) => {
        console.log('Error:', error);
        this.movies = [];
      }
    );
    
    this.formTouched = true; // Устанавливаем значение true, когда форма отправлена
  }

  showDetails(imdbID: string) {
    this.router.navigate(['/film', imdbID]);
  }
}
