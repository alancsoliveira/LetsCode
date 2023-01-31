class Treinador {
  #nome
  #cidade
  #qtdPokemon
  #qtdPokebola

  constructor(nome, cidade) {
    this.#nome = nome
    this.#cidade = cidade
    this.#qtdPokemon = 0
    this.#qtdPokebola = 0
  }

  get nome() {
    return this.#nome
  }
  get cidade() {
    return this.#cidade
  }
  get qtdPokemon() {
    return this.#qtdPokemon
  }
  get qtdPokebola() {
    return this.#qtdPokebola
  }

  set nome(valor) {
    this.#nome = valor
  }
  set cidade(valor) {
    this.#cidade = valor
  }
  set qtdPokemon(valor) {
    this.#qtdPokemon = valor
  }
  set qtdPokebola(valor) {
    this.#qtdPokebola = valor
  }

  iniciarJornada() {
    this.#qtdPokebola += 5
    this.#qtdPokemon += 1
  }
}

module.exports = Treinador
