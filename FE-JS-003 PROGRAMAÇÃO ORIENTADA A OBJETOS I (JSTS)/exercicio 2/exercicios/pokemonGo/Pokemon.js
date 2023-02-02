class Pokemon {
  #nome
  #level
  #selvagem = true

  constructor(nome) {
    this.#nome = nome
    this.#level = Math.floor(Math.random()*99)+1
  }

  get nome() {
    return this.#nome
  }

  get level() {
    return this.#level
  }

  get selvagem() {
    return this.#selvagem
  }

  set selvagem(novoValor) {
    this.#selvagem = novoValor
  }
}

module.exports = Pokemon
