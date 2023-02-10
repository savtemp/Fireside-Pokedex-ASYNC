import { appState } from "../AppState.js";
import { ActivePokemon } from "../Models/ActivePokemon.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeAPI } from "./AxiosService.js"


class PokemonsService{
  async setActivePokemon(url) {
    const res = await pokeAPI.get(url)
    console.log('[GETTING ACTIVE POKEMON]', res.data);
    appState.activePokemon = new ActivePokemon(res.data)
    // console.log('active pokemon in the appstate', appState.activePokemon);

  }

  async getAllPokemon() {
    const res = await pokeAPI.get('/api/v2/pokemon')
    // console.log('[GETTING THE POKEMON LIST]', res.data);
    appState.pokemons = res.data.results.map(p => new Pokemon(p))
    // console.log('these are my pokemons list', appState.pokemons);
  }
}


export const pokemonsService = new PokemonsService()