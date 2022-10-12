import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
      + parametros.pais + '&category=' + parametros.categoria + '&apiKey=38f20d3afded47c0bc927736d4128850';
    return this.http.get(URL);
  }

}
