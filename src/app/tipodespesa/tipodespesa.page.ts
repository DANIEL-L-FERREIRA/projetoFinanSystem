import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tipodespesa',
  templateUrl: './tipodespesa.page.html',
  styleUrls: ['./tipodespesa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TipodespesaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
