// import { Treinador } from "./Treinador.js"
// import { Pokemon } from "./Pokemon.js"

const Treinador = require("./Treinador")
const Pokemon = require("./Pokemon")

const treinador1 = new Treinador("Ash", "Pallet")

const opcoesPokemonSelvagem = [
  new Pokemon("Pidgey"),
  new Pokemon("Rattata"),
  new Pokemon("Gastly"),
  new Pokemon("Grimer"),
  new Pokemon("Slowpoke"),
  new Pokemon("Magikarp"),
  new Pokemon("Psyduck"),
  new Pokemon("Vulpix"),
  new Pokemon("Oddish"),
  new Pokemon("Pikachu"),
]

function selecionarPokemonAleatorio() {
  const indexAleatorio = Math.floor(
    Math.random() * opcoesPokemonSelvagem.length
  )
  return opcoesPokemonSelvagem[indexAleatorio]
}

function jogarPokebola(treinador, PokemonAleatorio) {
  const temPokebola = treinador.qtdPokebola > 0

  if (!temPokebola) {
    console.log("Você não tem mais pokebolas disponíveis")
    return "Você não conseguiu capturar o Pokemon"
  }
  treinador.qtdPokebola--
  const chanceAcerto = Math.floor(Math.random() * 100)

  // Math.floor(Math.random() * (100 + 1)) *
  // (treinador.qtdPokemon / PokemonAleatorio.level).toFixed(3)
  if (chanceAcerto >= 50) {
    console.log(`${treinador.nome} capturou o ${PokemonAleatorio.nome}`)
    treinador.qtdPokemon++
    PokemonAleatorio.selvagem = false
  } else {
    console.log(`${PokemonAleatorio.nome} quebrou a pokebola`)
  }
}

function iniciarBatalha(treinador) {
  const PokemonAleatorio = selecionarPokemonAleatorio()
  console.log(
    `Um ${PokemonAleatorio.nome} (Lv. ${PokemonAleatorio.level}) selvagem apareceu!`
  )

  let contador = 0
  while (contador < 3 && PokemonAleatorio.selvagem) {
    jogarPokebola(treinador, PokemonAleatorio)
    contador++
  }
}

treinador1.iniciarJornada()
iniciarBatalha(treinador1)
console.log("====================================")

iniciarBatalha(treinador1)
console.log("====================================")

iniciarBatalha(treinador1)
console.log("====================================")

