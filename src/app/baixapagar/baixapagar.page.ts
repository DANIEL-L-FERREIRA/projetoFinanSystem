import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baixapagar',
  templateUrl: './baixapagar.page.html',
  styleUrls: ['./baixapagar.page.scss'], 
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BaixapagarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegarParaContas() {
    this.router.navigateByUrl('contaspagar');
  }

}
