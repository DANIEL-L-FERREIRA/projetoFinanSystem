import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../api/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.page.html',
  styleUrls: ['./listagem-usuario.page.scss'],
})
export class ListagemUsuarioPage {
  [x: string]: any;

  public usuarios:any = [];
  
  constructor(private service: UsuarioService,private router: Router ) {
    this.getAllUsuarios();
   }  

  public getAllUsuarios(){
    this.service.getAllUsuarios().then((usuarios:any) => {
      this.usuarios = usuarios;
    })
  }

  public deleteById(id:number) {
    console.log(id)
    this.service.deleteUsuarios(id).then(usuarios => {
      console.log('DELETE');
      this.getAllUsuarios();

    }, err => {
      this.getAllUsuarios();
    })
  }

  

  navegarParaInicio() {
    this.router.navigate(['inicio']);
  }
}
