import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemUsuarioPageRoutingModule } from './listagem-usuario-routing.module';

import { ListagemUsuarioPage } from './listagem-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemUsuarioPageRoutingModule
  ],
  declarations: [ListagemUsuarioPage]
})
export class ListagemUsuarioPageModule {}
