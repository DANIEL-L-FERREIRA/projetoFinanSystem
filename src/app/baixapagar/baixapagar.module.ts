import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaixapagarPageRoutingModule } from './baixapagar-routing.module';

import { BaixapagarPage } from './baixapagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaixapagarPageRoutingModule
  ],
  declarations: []
})
export class BaixapagarPageModule {}
