import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baixareceber',
  templateUrl: './baixareceber.page.html',
  styleUrls: ['./baixareceber.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BaixareceberPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegarParaContas() {
    this.router.navigate(['/contasreceber']);
  }

}
