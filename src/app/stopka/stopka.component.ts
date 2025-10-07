import { Component } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';

@Component({
  selector: 'app-stopka',
  standalone: true,
  imports: [],
  templateUrl: './stopka.component.html',
  styleUrl: './stopka.component.css'
})
export class StopkaComponent {
  suma = 0;
 licznik = 0;
  constructor(private serwis:KalkulatorService){
    this.suma = this.serwis.dodaj(3,4,1,1,4);
    this.licznik  = this.serwis.getLicznik();

  }
  powieksz(){
    this.licznik = this.serwis.zwieksz();
  }
}
