import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {

  public usuario = {
    id: '',
    nome : '',
    setor: '',
    cpf  : '',
    dataNascimento : new Date(),
    endereco: '',
    tipoUsuario: '',
    login: '',
    senha: ''
}
  
 

  constructor(private usuarioService: UsuarioService, private router: Router ) {
    this.getAllUsuarios();
    
    
   }
  

   

  ngOnInit() {
  }
  navegarParaListagem() {
    this.router.navigate(['/listagem-usuario'])
  }
  

  public getAllUsuarios(){
    this.usuarioService.getAllUsuarios().then(usuarios => {
      console.log(usuarios);
    });


  }

}