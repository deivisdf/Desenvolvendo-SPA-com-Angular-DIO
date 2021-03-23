import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsService } from '../services/news.service';
import { Noticia} from '../interfaces/noticia'


@Component({
  selector: 'news-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {

  noticias = [];
  n = [];
  count: number = 1;
  carregaMais: boolean = true;
  durationInSeconds = 5;
  gridNoticias : boolean = true;
  not : Noticia;
  

  constructor(public wp: NewsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.wp.getRecentNews().subscribe(d => {
     
      this.noticias = d;
      this.count++;

    },err=>{
      console.log()
      this._snackBar.open(err.error.message,'Fechar',{duration:5000 , verticalPosition:'top', horizontalPosition: 'center'});
    });
  }


  openSnackBar() {
    this._snackBar.open('Fim das Notícias...','Fechar',{duration:5000});
  }


  onScroll() {
   
    if (this.carregaMais) {
      console.log(this.count)
      this.wp.getRecentNews(this.count).subscribe(d => {

         this.n = d;
        if (this.n.length < 12) {
          this.carregaMais= false;
        }
        this.n.forEach(x => {
          this.noticias.push(x);
        })


        this.count++;

      }, err => {
        console.log(err)
      });
    } else {
     this.openSnackBar();
    }
  }


  abreNoticiaCompleta(noticia: Noticia){
     this.gridNoticias = false;
      this.not = noticia;
     

  }

  recebeFechaNoticia(resposta) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', resposta);
    this.not = null;
    this.gridNoticias = true;
  }
  

}


