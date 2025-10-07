import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-losowanie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './losowanie.component.html',
  styleUrl: './losowanie.component.css'
})
export class LosowanieComponent {
ilosc: number = 0;
zakres: number = 0;
liczby:number[] = [];
losuj():void{
  this.liczby = [];
  for(let i = 0;i<this.ilosc;i++){
    this.liczby.push(Math.floor(Math.random() * this.zakres));
  }
}
}
