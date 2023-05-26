import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaixapagarPage } from './baixapagar.page';

const routes: Routes = [
  {
    path: '',
    component: BaixapagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaixapagarPageRoutingModule {}
