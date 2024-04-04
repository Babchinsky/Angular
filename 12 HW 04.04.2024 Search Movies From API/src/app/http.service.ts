import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private api_key: string = '14b0e812';

  constructor(private http: HttpClient) {}

  // Метод для получения данных с сервера
  getMovies(title: string, type: string): Observable<any> {
    const url = `http://www.omdbapi.com/?apikey=${this.api_key}&s=${title}&type=${type}`;

    // Выполнение HTTP GET запроса и возвращение Observable
    return this.http.get(url);
  }

  getMoviesByID(imdbID: string): Observable<any> {
    const url = `http://www.omdbapi.com/?apikey=${this.api_key}&i=${imdbID}`;

    // Выполнение HTTP GET запроса и возвращение Observable
    return this.http.get(url);
  }
}
