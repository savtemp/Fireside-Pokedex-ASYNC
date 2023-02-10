

export class ActivePokemon{
  constructor(data){
    this.name = data.name 
    this.img = data.sprites.front_shiny
    this.abilities = data.abilities
  }

  get ActivePokemonTemplate(){
    return `
    <div>
      <img src="${this.img}" alt="pokemonImg">
      <p>${this.name}</p>
      <p>${this.FormatAbilities}</p>
      <button class="btn btn-success" onclick="app.">Catch Pokemon</button>
    </div>
    `
  }


  get FormatAbilities(){
    let template = ''
    this.abilities.forEach(a => template += `
    <p>${a.ability.name}</p>
    `)
    return template
  }
}