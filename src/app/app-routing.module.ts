import { EditarPensamentoComponent } from './Components/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './Components/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentosComponent } from './Components/listar-pensamentos/listar-pensamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensamentosComponent } from './Components/pensamentos/pensamentos.component';

const routes: Routes = [
  {path: '', redirectTo: '/criarPensamento', pathMatch: 'full'},
  {path: 'criarPensamento', component: PensamentosComponent},
  {path: 'listarPensamento', component: ListarPensamentosComponent},
  {path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent},
  {path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
