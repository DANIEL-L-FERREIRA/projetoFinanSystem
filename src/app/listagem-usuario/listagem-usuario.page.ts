import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../api/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.page.html',
  styleUrls: ['./listagem-usuario.page.scss'],
})
export class ListagemUsuarioPage implements OnInit {

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

    this.service.deleteUsuarios(id).then(usuarios => {
      console.log('DELETE');
      console.log(usuarios);

    })
  }

  

  ngOnInit() {
  }

  navegarParaInicio() {
    this.router.navigate(['inicio']);
  }
  
  

}
