import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]

})
export class ClientePage implements OnInit {

  public cliente = {
    id: '',
    nome : '',
    cpfCNPJ  : '',
    endereco: '',
    telefone: '',
    contato: '',
    regimeTributario: '',
    dataNascimento : new Date(),
    referencia: '',
    observacoes: ''
    }

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navegarParaContas() {
    this.router.navigate(['/contasreceber']);
  }

}