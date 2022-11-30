import { PensamentoService } from './../../Services/pensamento.service';
import { Pensamento } from './../../Services/pensamento-interface';
import { CardModelo } from './../../Services/card-pensamentos-modelo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pensamentos',
  templateUrl: './card-pensamentos.component.html',
  styleUrls: ['./card-pensamentos.component.css']
})
export class CardPensamentosComponent implements OnInit {

  @Input() pensamento!: Pensamento;

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.larguraPensamento.length > 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false){
      return 'inativo'
    }else{
      return 'ativo'
    }
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });

  }

}
