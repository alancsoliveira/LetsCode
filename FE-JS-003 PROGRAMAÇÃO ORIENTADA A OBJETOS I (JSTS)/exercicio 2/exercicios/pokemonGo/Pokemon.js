class Pokemon {
  nome
  #level
  #selvagem = true

  constructor(nome) {
    this.nome = nome
    this.#level = Math.floor(Math.random() * 100 + 1)
  }
  get nome() {
    return this.nome
  }
  get level() {
    return this.#level
  }

  set selvagem(novoValor) {
    this.#selvagem = novoValor
  }
}

//  

module.exports = Pokemon
