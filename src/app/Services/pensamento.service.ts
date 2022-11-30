import { Pensamento } from './pensamento-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]> {

    const intensPagina = 6;

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", intensPagina)

    if(filtro.trim().length > 2){
      params = params.set("q", filtro)
    }

    if(favoritos){
      params = params.set("favorito", true)
    }
      return this.http.get<Pensamento[]>(this.API, {params})
  }
  buscarPensamentoId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluirPensamento(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    const url = `${this.API}/${pensamento.id}`

    return this.editarPensamento(pensamento);
  }

  // listarPensamentosFavoritos(pagina: number, filtro: string): Observable<Pensamento[]>{
  //   const intensPagina = 6;

  //   let params = new HttpParams()
  //     .set("_page", pagina)
  //     .set("_limit", intensPagina)
  //     .set("favorito", true)

  //   if(filtro.trim().length > 2){
  //     params = params.set("q", filtro)
  //   }
  //   return this.http.get<Pensamento[]>(this.API, {params})
  // }


}
