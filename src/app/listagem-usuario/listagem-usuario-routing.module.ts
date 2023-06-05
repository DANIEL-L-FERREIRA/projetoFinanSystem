import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemUsuarioPage } from './listagem-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemUsuarioPageRoutingModule {}
