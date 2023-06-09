import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContaspagarPage } from '../contaspagar/contaspagar.page';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  

})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegarParaContaspagar() {
    this.router.navigateByUrl('contaspagar');
  }
  navegarParaContasReceber() {
    this.router.navigate(['/contasReceber'])
}
navegarParaUsuarios() {
  this.router.navigate(['/listagem-usuario'])
}
navegarParaHome() {
  this.router.navigate(['/home'])
}
}
