import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-contaspagar',
  templateUrl: './contaspagar.page.html',
  styleUrls: ['./contaspagar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContaspagarPage implements OnInit {
  

  constructor(private router: Router) { }


  ngOnInit() {
  }

  navegarParaInicio() {
    this.router.navigateByUrl('inicio');
}
navegarParatipodespesa() {
  this.router.navigateByUrl('tipodespesa');
}
navegarParaFornecedor() {
  this.router.navigateByUrl('fornecedor');
}
navegarParaDespesa() {
  this.router.navigate(['/despesa']);
}
  
  
}
