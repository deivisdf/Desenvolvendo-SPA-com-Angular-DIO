import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia} from '../interfaces/noticia'
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = 'https://newsapi.org/v2/top-headlines?country=br&apiKey='
  private apiKey = '' // aqui vai a chave de api
  private quantPosts = '&pageSize=12'
  private pagina: number = 1;
   n: Noticia[] = [];
  constructor(public http: HttpClient) { }


  getRecentNews(pagina?:number):Observable<Noticia[]>{
    this.n = [];
    if(pagina){
      this.pagina = pagina;
    }
    return this.http.get(`${this.url}${this.apiKey}${this.quantPosts}&page=${this.pagina}`).pipe(
      map((response) => {

        let noticia =[];
      
       noticia = (Object.values(response)[2]);
       noticia.forEach(x =>{
          this.n.push(x);
       })

          return this.n;
      }),
    );
  }

}
