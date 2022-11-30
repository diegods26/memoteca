import { Router } from '@angular/router';
import { PensamentoService } from './../../Services/pensamento.service';
import { Pensamento } from './../../Services/pensamento-interface';
import { CardModelo } from './../../Services/card-pensamentos-modelo';
import { Component, Input, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

 listarPensamento: Pensamento[] = []

 paginaAtual: number = 1;

 maisPensamentos: boolean = true;

 filtro: string = '';

 favoritos: boolean = false;

 listaFavoritos: Pensamento[] = [];

 titulo: string = 'Meu Mural';



  constructor(private service: PensamentoService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaDePensamento) => {
      this.listarPensamento = listaDePensamento;
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listarPensamentos => {
        this.listarPensamento.push(...listarPensamentos)
          if(!listarPensamentos.length){
            this.maisPensamentos = false;
          }
      })
  }

  pesquisarPensamentos(){
    this.maisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listarpensamentos =>{
        this.listarPensamento = listarpensamentos
      })
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.favoritos = true;
    this.maisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(pensamentosFavoritos => {
        this.listarPensamento = pensamentosFavoritos;
        this.listaFavoritos = pensamentosFavoritos;
      })
  }

  recarregarComponente(){
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

}
