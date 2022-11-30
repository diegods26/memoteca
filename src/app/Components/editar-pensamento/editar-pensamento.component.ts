import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PensamentoService } from './../../Services/pensamento.service';
import { Pensamento } from './../../Services/pensamento-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: PensamentoService,
    private router: Router, private aRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

      const id = this.aRoute.snapshot.paramMap.get('id');
      this.service.buscarPensamentoId(parseInt(id!)).subscribe((pensamento) => {
        this.formulario = this.formBuilder.group({
          id:[pensamento.id],
          conteudo: ['', Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/(.|\s)*\S(.|\s)*/)
          ])],
          autoria: ['', Validators.compose([
            Validators.required,
            Validators.minLength(3)
          ])],
          modelo: [pensamento.modelo],
          favarito: [pensamento.favorito]
        });
      })


  }

  editarPensamento(){
    this.service.editarPensamento(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }
      return 'botao__desabilitado';
  }

}
