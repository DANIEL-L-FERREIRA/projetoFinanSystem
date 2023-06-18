import { HttpClient, HttpHeaders } from '@angular/common/http'; /* importação */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private host = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  public getAllUsuarios() {
    return new Promise((ret) => {
      // requisição GET
      this.http.get(this.host).subscribe((dados) => {
        ret(dados);
      });
    });
  }

  public getDadoById(id: number) {
    return new Promise((ret) => {
      // requisição GET
      this.http.get(this.host + id).subscribe((dados) => {
        ret(dados);
      });
    });
  }

  public postDados(obj: any) {
    return new Promise((ret) => {
      this.http.post(this.host, obj).subscribe((dados) => {
        ret(dados);
      });
    });
  }

  public putDados(obj: any) {
    return new Promise((ret) => {
      /* cabeçalho da requisição */
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      // requisição PUT
      this.http
        .put(this.host + obj.id, JSON.stringify(obj), { headers: headers })
        .subscribe((dados) => {
          ret(dados);
        });
    });
  }
  salvarCadastro(cadastro: any) {
    const url = 'URL_DO_SERVIDOR'; // Substitua pela URL correta do seu servidor
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, cadastro, { headers }).subscribe(
      (response) => {
        console.log('Cadastro salvo com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao salvar o cadastro:', error);
      }
    );
  }

  public deleteUsuarios(id: number) {
    return new Promise((ret) => {
      // requisição DELETE
      this.http.delete(this.host + id).subscribe((dados) => {
        console.log(dados);
      });
    });
  }
}
