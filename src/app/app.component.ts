import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LosowanieComponent } from "./losowanie/losowanie.component";
import { NagrodaComponent } from "./nagroda/nagroda.component";
import { StopkaComponent } from "./stopka/stopka.component";
import { OsobyComponent } from "./osoby/osoby.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LosowanieComponent, NagrodaComponent, StopkaComponent, OsobyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zadanieBW';
}
