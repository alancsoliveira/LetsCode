class Animal {
  nome
  idade
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }
  apresentar() {
    return `Oi! Eu sou um ${this.constructor.name}.`
  }
}

class Mamifero extends Animal {
  tipo
  locomocao
  constructor(nome, idade, tipo, locomocao) {
    super(nome, idade)
    this.tipo = tipo
    this.locomocao = locomocao
  }
  apresentar() {
    return `Oi! Eu sou um ${this.constructor.name}.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei ${this.locomocao}.`
  }
}

class Ave extends Animal {
  tipo
  locomocao
  constructor(nome, idade, tipo, locomocao) {
    super(nome, idade)
    this.tipo = tipo
    this.locomocao = locomocao
  }
  apresentar() {
    return `Oi! Eu sou uma ${this.constructor.name}.`
  }
  movimentar() {
    return `Eu sou uma ${this.constructor.name} e eu sei ${this.locomocao}.`
  }
}

class Peixe extends Animal {
  tipo
  locomocao
  constructor(nome, idade, tipo, locomocao) {
    super(nome, idade)
    this.tipo = tipo
    this.locomocao = locomocao
  }
  apresentar() {
    return `Oi! Eu sou um ${this.constructor.name}.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei ${this.locomocao}.`
  }
}

class Humano extends Mamifero {
  comunicacao
  constructor(nome, idade, tipo, locomocao, comunicacao) {
    super(nome, idade, tipo, locomocao)
    this.comunicacao = comunicacao
  }
  apresentar() {
    return `Oi! Eu sou um ${this.constructor.name}, meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei pedir um Uber.`
  }
}

class Cachorro extends Mamifero {
  comunicacao
  constructor(nome, idade, tipo, locomocao, comunicacao) {
    super(nome, idade, tipo, locomocao)
    this.comunicacao = comunicacao
  }
  apresentar() {
    return `"Oi! Eu sou um ${this.constructor.name}."`
  }
  movimentar() {
    return `"Eu sou um ${this.constructor.name} e eu sei ${this.locomocao} perseguir veículos."`
  }
}

class Advogado extends Humano {
  areaDeAtuacao
  constructor(nome, idade, tipo, locomocao, comunicacao, areaDeAtuacao) {
    super(nome, idade, tipo, locomocao, comunicacao)
    this.areaDeAtuacao = areaDeAtuacao
  }
  apresentar() {
    return `Oi! Eu sou um ${this.constructor.name}, meu nome é ${this.nome} e tenho ${this.idade} anos de idade minha area de atuação é ${this.areaDeAtuacao}.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei pedir um Uber.`
  }
}

class Medico extends Humano {
  areaDeAtuacao
  constructor(nome, idade, tipo, locomocao, comunicacao, areaDeAtuacao) {
    super(nome, idade, tipo, locomocao, comunicacao)
    this.areaDeAtuacao = areaDeAtuacao
  }
  apresentar() {
    return `Oi! Eu sou um ${this.constructor.name}, meu nome é ${this.nome} e tenho ${this.idade} anos de idade minha area de atuação é ${this.areaDeAtuacao}.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei pedir um Uber.`
  }
}

class Desenvolvedor extends Humano {
  areaDeAtuacao
  constructor(nome, idade, tipo, locomocao, comunicacao, areaDeAtuacao) {
    super(nome, idade, tipo, locomocao, comunicacao)
    this.areaDeAtuacao = areaDeAtuacao
  }
  apresentar() {
    return `Oi! Eu sou um ${this.constructor.name}, meu nome é ${this.nome} e tenho ${this.idade} anos de idade minha area de atuação é ${this.areaDeAtuacao}.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei pedir um Uber.`
  }
}

class BackEnd extends Desenvolvedor {
  constructor(nome, idade, tipo, locomocao, comunicacao, areaDeAtuacao, opcao) {
    super(nome, idade, tipo, locomocao, comunicacao, areaDeAtuacao)
  }
  apresentar() {
    return `Oi! Eu sou um desenvolvedor, meu nome é ${this.nome} e tenho ${this.idade} anos de idade minha area de atuação é ${this.constructor.name}.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei pedir um Uber.`
  }
  darDesculpa() {
    let result = Math.floor(Math.random() * 101)
    if (result % 2 == 0) {
      return "Na minha máquina funciona"
    }
    return "Terminei! Falta só testar"
  }
}

class FrontEnd extends Desenvolvedor {
  constructor(nome, idade, tipo, locomocao, comunicacao, areaDeAtuacao, opcao) {
    super(nome, idade, tipo, locomocao, comunicacao, areaDeAtuacao)
  }
  apresentar() {
    return `Oi! Eu sou um desenvolvedor, meu nome é ${this.nome} e tenho ${this.idade} anos de idade minha area de atuação é ${this.constructor.name}.`
  }
  movimentar() {
    return `Eu sou um ${this.constructor.name} e eu sei pedir um Uber.`
  }
  darDesculpa() {
    let result = Math.floor(Math.random() * 101)
    if (result % 2 == 0) {
      return "Mas no meu monitor a cor tá igualzinha"
    }
    return "A culpa é do usuário"
  }
}

//constructor Humano(nome: any, idade: any, tipo: any, locomocao: any, comunicacao: any): Humano
const advogado = new Humano(
  "Jamerson",
  27,
  "terrestre",
  "andar",
  "falar",
  "direito penal"
)
const medico = new Medico(
  "Rafael",
  32,
  "terrestre",
  "andar",
  "falar",
  "medicina veterinaria"
)
const desenvolvedor = new Desenvolvedor(
  "Alan",
  30,
  "terrestre",
  "andar",
  "falar",
  "desenvolvimento WEB"
)
const desenvolvedorBackEnd = new BackEnd(
  "Alan",
  30,
  "terrestre",
  "andar",
  "falar",
  "desenvolvimento WEB"
)
const desenvolvedorFrontEnd = new FrontEnd(
  "Alan",
  30,
  "terrestre",
  "andar",
  "falar",
  "desenvolvimento WEB"
)

const cachorro = new Cachorro("Toby", 5, "terrestre", "correr", "latir")

console.log(advogado.apresentar())
console.log(medico.apresentar())
console.log(desenvolvedor.apresentar())
console.log(desenvolvedorBackEnd.darDesculpa())
console.log(desenvolvedorFrontEnd.darDesculpa())
