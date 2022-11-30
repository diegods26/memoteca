import { PensamentoService } from './../../Services/pensamento.service';
import { Pensamento } from './../../Services/pensamento-interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: PensamentoService,
    private roter: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento(){
    console.log(this.formulario.status);
    if(this.formulario.valid){
      this.service.criarPensamento(this.formulario.value).subscribe(() => {
        this.roter.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.roter.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao';
    }
    return 'botao__desabilitado';
  }

}
