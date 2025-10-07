import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-nagroda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nagroda.component.html',
  styleUrl: './nagroda.component.css'
})
export class NagrodaComponent {
liczba:number = 0;
zdjecie:string = "";
sprawdz():void{
  if(this.liczba % 2 == 0){
    this.zdjecie = "nagroda1.png";
  }else{
    this.zdjecie = "nagroda2.png"
  }
}
}
