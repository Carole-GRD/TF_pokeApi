import { Component } from '@angular/core';
import { pokemon } from '../shared/models/pokemon';
import { PokeService } from '../shared/services/poke/poke.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  monMessage : string = '';
  monPokemon! : pokemon;

  constructor(private _pokeService : PokeService) {}



  searchPikachu() {

    this.monMessage = '';

    this._pokeService.getPikachu().subscribe({
      
      next : (data) => {
        this.monPokemon = data;
        
      },
      error : (err) => {
        console.log(err);
        
        this.monMessage = 'Erreur recue : ' + err.error;
        
      },
      complete : () => {
        console.log('complete');       
      }

    })
  }

}
