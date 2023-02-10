import { appState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

export class PokemonsController{
  _drawPokemonList(){
    let pokemons = appState.pokemons
    let template = ''
    pokemons.forEach(p => template += p.PokemonListTemplate)
    setHTML('pokemons', template)
  }

  _drawActivePokemon(){
    setHTML('activePokemon', appState.activePokemon.ActivePokemonTemplate)
  }
  

  constructor(){
    // console.log('Hello from the Pokemon controller!');
    appState.on('pokemons', this._drawPokemonList)
    this.getAllPokemon()
    appState.on('activePokemon', this._drawActivePokemon)
  }

  async getAllPokemon(){
    try {
      await pokemonsService.getAllPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }

  async setActivePokemon(url){
    try {
      await pokemonsService.setActivePokemon(url)
    } catch (error) {
      Pop.error(error)
    }
  }
}