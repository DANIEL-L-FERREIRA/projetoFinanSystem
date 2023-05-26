import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipodespesaPageRoutingModule } from './tipodespesa-routing.module';

import { TipodespesaPage } from './tipodespesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipodespesaPageRoutingModule
  ],
  declarations: []
})
export class TipodespesaPageModule {}
