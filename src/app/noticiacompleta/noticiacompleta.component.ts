import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'news-noticiacompleta',
  templateUrl: './noticiacompleta.component.html',
  styleUrls: ['./noticiacompleta.component.css']
})
export class NoticiacompletaComponent implements OnInit {
 @Input() valor;
 @Output() fecharNoticia = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.valor)
    
  }

  voltar(){
    
     this.fecharNoticia.emit({fechar: true})
     
  }

}
