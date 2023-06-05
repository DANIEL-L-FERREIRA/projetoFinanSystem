import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../api/usuario.service';


@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.page.html',
  styleUrls: ['./listagem-usuario.page.scss'],
})
export class ListagemUsuarioPage implements OnInit {

  public usuarios:any = [];


  constructor(private service: UsuarioService) {
    this.getAllUsuarios();
   }

  

  public getAllUsuarios(){
    this.service.getAllUsuarios().then((usuarios:any) => {
      this.usuarios = usuarios;
    })
  }

  public deleteById(id:number) {

    this.service.deleteUsuarios(id).then(usuarios => {
      console.log('DELETE');
      console.log(usuarios);

    })
  }

  ngOnInit() {
  }

}
