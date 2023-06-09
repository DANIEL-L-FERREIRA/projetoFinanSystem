import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemUsuarioPageRoutingModule } from './listagem-usuario-routing.module';

import { ListagemUsuarioPage } from './listagem-usuario.page';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemUsuarioPageRoutingModule,
    RouterModule
    
  ],
  declarations: [ListagemUsuarioPage]
})
export class ListagemUsuarioPageModule {}
