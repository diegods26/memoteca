import { PensamentoService } from './Services/pensamento.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PensamentosComponent } from './Components/pensamentos/pensamentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPensamentosComponent } from './Components/listar-pensamentos/listar-pensamentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardPensamentosComponent } from './Components/card-pensamentos/card-pensamentos.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './Components/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './Components/editar-pensamento/editar-pensamento.component';
import { BotaoCarregarMaisComponent } from './Components/botao-carregar-mais/botao-carregar-mais.component'
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PensamentosComponent,
    ListarPensamentosComponent,
    CardPensamentosComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
    BotaoCarregarMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    PensamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
