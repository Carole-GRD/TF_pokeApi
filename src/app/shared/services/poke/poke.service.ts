import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pokemon } from '../../models/pokemon';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private _httpClient: HttpClient) { }

  getPikachu(): Observable<pokemon> {
    
    return this._httpClient.get<pokemon>('https://pokeapi.co/api/v2/pokemon/pikachuchu')
      .pipe(
        map(x => {
          return  {
            ...x,    // spread operator to copy all properties from otiginal object  (-> pour ne pas devoir réécrire toutes les propriétés, car cela doit correspondre au model du pokemon, or ici, on ne transforme que 2 propriétés)
            height : x.height * 10,
            weight : x.weight / 10
            // estBogoss : true        //  on peut rajouter des propriétés
            // date : new Date(date)   //  pour transformer la donnée directement à la réception de l'objet et ne pas devoir transformer les dates partout dans le site
          }})
      );
  }

}
