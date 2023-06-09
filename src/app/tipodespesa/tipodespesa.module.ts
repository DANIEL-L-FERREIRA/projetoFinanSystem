import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipodespesaPageRoutingModule } from './tipodespesa-routing.module';

import { TipodespesaPage } from './tipodespesa.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipodespesaPageRoutingModule,
    RouterModule
  ],
  declarations: [TipodespesaPage]
})
export class TipodespesaPageModule {}
