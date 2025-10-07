import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() {

   }
   private licznik:number = 0;
   zwieksz():number{
    this.licznik++;
    return this.licznik;
   }
   getLicznik():number{
    return this.licznik;
   }
     dodaj(...liczby:number[]):number{
    let wynik = 0;
    for(let wartosci of liczby){
      wynik += wartosci;
    }
    return wynik;
  }
}
