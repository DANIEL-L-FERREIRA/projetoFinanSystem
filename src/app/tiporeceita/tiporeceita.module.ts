import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiporeceitaPageRoutingModule } from './tiporeceita-routing.module';

import { TiporeceitaPage } from './tiporeceita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiporeceitaPageRoutingModule
  ],
  declarations: []
})
export class TiporeceitaPageModule {}
