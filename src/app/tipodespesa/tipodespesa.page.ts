import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-tipodespesa',
  templateUrl: './tipodespesa.page.html',
  styleUrls: ['./tipodespesa.page.scss'],
  
})
export class TipodespesaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarParaDespesa() {
    this.router.navigate(['/tipodespesa']);
  }
  navegarParaContas() {
    this.router.navigate(['/contaspagar']);
  }

}