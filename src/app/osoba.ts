export interface Osoba {
    id:number;
    imie:string;
    nazwisko:string;
    dataUr:string;
    zdjecie:string;
    waga:number;
    wzrost:number;
    plec:Plec;
}
export enum Plec{
    K="K",
    M="M"
}
