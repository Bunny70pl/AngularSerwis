import { Component } from '@angular/core';
import { Osoba } from '../osoba';
import { Plec } from '../osoba';
@Component({
  selector: 'app-osoby',
  standalone: true,
  imports: [],
  templateUrl: './osoby.component.html',
  styleUrl: './osoby.component.css'
})
export class OsobyComponent {
ludzie:Osoba[] = [{
  id:1,
  imie:'Ala',
  nazwisko:'Nowak',
  dataUr:"2005-05-25",
  zdjecie:"ala.jpg",
  waga:60,
  wzrost:160,
  plec: Plec.K
},
{
  id:2,
  imie:'Ola',
  nazwisko:'Kowalska',
  dataUr:"2011-01-01",
  zdjecie:"ola.jpg",
  waga:58,
  wzrost:161,
  plec: Plec.K
}
,
{
  id:3,
  imie:'Olek',
  nazwisko:'Kowalski',
  dataUr:"2005-05-25",
  zdjecie:"olek.jpg",
  waga:80,
  wzrost:185,
  plec: Plec.M
},
{
    id:4,
  imie:'Romek',
  nazwisko:'Rowalski',
  dataUr:"2001-02-25",
  zdjecie:"romek.jpg",
  waga:90,
  wzrost:195,
  plec: Plec.M
}];
}
