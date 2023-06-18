import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class UsuarioPage implements OnInit {
  public usuario = {
    id: '',
    nome: '',
    setor: '',
    cpf: '',
    dataNascimento: new Date(),
    endereco: '',
    tipoUsuario: '',
    login: '',
    senha: '',
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.getAllUsuarios();
  }

  ngOnInit() {}
  navegarParaListagem() {
    this.router.navigate(['/listagem-usuario']);
  }

  public getAllUsuarios() {
    this.usuarioService.getAllUsuarios().then((usuarios) => {
      console.log(usuarios);
    });
  }

  async postUsuario(usuario: Usuario) {
    const response = await this.usuarioService.postDados(usuario);
    console.log({ response });
  }
}
