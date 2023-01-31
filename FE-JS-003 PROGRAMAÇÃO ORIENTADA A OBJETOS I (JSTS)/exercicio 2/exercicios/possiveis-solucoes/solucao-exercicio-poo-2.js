class Treinador {
  nome
  qntDePokemons = randomNumber(10)
}

class Pokemons {
  nome
  level
}

function randomNumber(max = 50) {
  wildPokemonLevel = Math.floor(Math.random() * max + 1)
}

wildPokemonLevel = randomNumber()

player1 = new Treinador("Leon")
player2 = new Treinador("Cynthia")
player3 = new Treinador("Steven")
player4 = new Treinador("Lance")
player5 = new Treinador("Diantha")
player6 = new Treinador("Alain")
player7 = new Treinador("Iris")
player8 = new Treinador("Ash_Ketchum")

console.log(player1)
