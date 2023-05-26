import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tiporeceita',
  templateUrl: './tiporeceita.page.html',
  styleUrls: ['./tiporeceita.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TiporeceitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
