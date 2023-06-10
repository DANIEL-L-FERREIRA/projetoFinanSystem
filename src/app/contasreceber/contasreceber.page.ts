import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';


@Component({
  selector: 'app-contasreceber',
  templateUrl: './contasreceber.page.html',
  styleUrls: ['./contasreceber.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
  
  

})
export class ContasreceberPage implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegarParaInicio() {
    this.router.navigateByUrl('inicio');
  }
    navegarParaCadastroCliente() {
      this.router.navigateByUrl('cliente');
}
navegarParaTipoReceita() {
  this.router.navigateByUrl('tiporeceita');
}
navegarParaLancamentoreceita() {
  this.router.navigateByUrl('receita');
}
navegarParaBaixarReceber() {
  this.router.navigateByUrl('baixareceber');
}
navegarParaContasReceber() {
  this.router.navigateByUrl('contasreceber');
}
}
