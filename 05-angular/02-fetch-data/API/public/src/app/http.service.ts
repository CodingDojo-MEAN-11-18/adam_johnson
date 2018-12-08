import { Injectable, getModuleFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUrlScheme, ArrayType } from '../../node_modules/@angular/compiler';
import { getInheritedFactory } from '../../node_modules/@angular/core/src/render3';

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
      console.log('Got data', data.abilities)
      for (const item of data.abilities){
        console.log(item.ability.name);
        let getInfo = this._http.get<InfoData>(item.ability.url)
        getInfo.subscribe(data => {
          console.log(`${data.pokemon.length} pokemon also share the ability`);
        })
        
      }
     
    });
   };
}

interface InfoData {
  pokemon: Array<number>
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