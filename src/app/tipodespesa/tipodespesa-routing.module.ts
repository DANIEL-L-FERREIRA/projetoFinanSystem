import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipodespesaPage } from './tipodespesa.page';

const routes: Routes = [
  {
    path: '',
    component: TipodespesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipodespesaPageRoutingModule {}
