// import { Treinador } from "./Treinador.js"
// import { Pokemon } from "./Pokemon.js"

const Treinador = require('./Treinador')
const Pokemon = require('./Pokemon')

const treinador1 = new Treinador("Ash", "Pallet")

const opcoesPokemonSelvagem = [
  new Pokemon("Rattata"),
  new Pokemon("Gastly"),
  new Pokemon("Grimer"),
  new Pokemon("Slowpoke"),
  new Pokemon("Magikarp"),
  new Pokemon("Psyduck"),
  new Pokemon("Oddish"),
  new Pokemon("Pikachu"),
]

treinador1.qtdPokemon = opcoesPokemonSelvagem.length
console.log(treinador1.qtdPokemon)
