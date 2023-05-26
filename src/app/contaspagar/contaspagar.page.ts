import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contaspagar',
  templateUrl: './contaspagar.page.html',
  styleUrls: ['./contaspagar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContaspagarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
