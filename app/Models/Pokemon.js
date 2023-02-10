

export class Pokemon{
  constructor(data){
    this.name = data.name
    this.url = data.url 
  }


  get PokemonListTemplate(){
    return `
    <button class="btn btn-primary m-2" onclick="app.pokemonsController.setActivePokemon('${this.url}')">${this.name}</button>
    `
  }
}