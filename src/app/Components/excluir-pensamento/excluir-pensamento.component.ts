import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../../Services/pensamento.service';
import { Pensamento } from './../../Services/pensamento-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(private service: PensamentoService,
    private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.aRoute.snapshot.paramMap.get('id');
    this.service.buscarPensamentoId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }
  }

  cancelarExclusao(){
    this.router.navigate(['/listarPensamento']);
  }

}
