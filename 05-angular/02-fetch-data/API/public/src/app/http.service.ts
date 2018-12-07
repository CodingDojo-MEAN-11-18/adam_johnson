import { Injectable, getModuleFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUrlScheme } from '../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   };
  getPokemon(){
    let pikachu = this._http.get<PokeData>('https://pokeapi.co/api/v2/pokemon/25/');
    pikachu.subscribe(data => {
      console.log(data);
      console.log('Got data', data.abilities)
      for (const item of data.abilities){
        console.log(item.ability.name);
      }
    });
   };
}
interface PokeData {
  abilities: Array<Ability>
}

interface Ability {
  ability: {
    name: string,
    url: string
  }
}