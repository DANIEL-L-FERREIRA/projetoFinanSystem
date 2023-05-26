import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contasreceber',
  templateUrl: './contasreceber.page.html',
  styleUrls: ['./contasreceber.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]

})
export class ContasreceberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
