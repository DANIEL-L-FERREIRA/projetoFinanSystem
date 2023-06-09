import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]

})
export class FornecedorPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navegarParaContas() {
    this.router.navigateByUrl('contaspagar');
  }

}
