import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaixareceberPage } from './baixareceber.page';

const routes: Routes = [
  {
    path: '',
    component: BaixareceberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaixareceberPageRoutingModule {}
