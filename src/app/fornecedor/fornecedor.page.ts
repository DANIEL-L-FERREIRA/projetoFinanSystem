import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]

})
export class FornecedorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
