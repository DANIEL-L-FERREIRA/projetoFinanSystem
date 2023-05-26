import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiporeceitaPage } from './tiporeceita.page';

const routes: Routes = [
  {
    path: '',
    component: TiporeceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiporeceitaPageRoutingModule {}
