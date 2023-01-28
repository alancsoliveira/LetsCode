// 1 - Crie uma agenda de contatos que armazene 6 contatos em um array, modelando o "contato" como um objeto.
//O modelo de contato deve ter as seguintes informacoes: (nome, sobrenome, telFixo, celular)

// function UserTipo(nome, sobrenome, telFixo, celular) {
//   return {
//     nome,
//     sobrenome,
//     telFixo,
//     celular
//   }
// }

// const user1 = new UserTipo("Alan", "Oliveira", "33221103", "85992008786")
// console.log(user1)


//console.log(schedule.map(item => item.nome))

/* 2 - Imagine que estejamos criando uma tela para cadastro de usuários para um sistema. Imagine que nesse sistema, podemos fazer o
 cadastro de usuários em lote, ou seja, a partir de uma tela, podemos cadastrar diversos usuários. Crie um algoritmo com uma funcao
 que, adicione um novo usuario a uma lista de usuarios e faca a insercao de 5 novos usuarios. Cada usuário deve ter as seguintes
 informacoes: (nome, sobrenome, email, idade, é administrador?)*/

const users = [
  {
    nome: "Alan",
    sobrenome: "Oliveira",
    email: "alan@gmail.com",
    idade: "30",
    isAdmin: 1,
  }
]

function createUser(nome, sobrenome, email, idade, isAdmin) {
  return {
    nome,
    sobrenome,
    email,
    idade,
    isAdmin
  }
}

function insertUsers() {

  const nome = String(prompt("Nome do usuário"))
  const sobrenome = String(prompt("Sobrenome do usuário"))
  const email = String(prompt("Email do usuário"))
  const idade = Number(prompt("Idade do usuário"))
  const isAdmin = Number(prompt("É adm? 1 para sem e 0 para não"))

  newUser = createUser(nome, sobrenome, email, idade, isAdmin)

  users.push(newUser)
}
insertUsers()
console.log(users)

// 3 - Melhore o algoritmo da questao 3 fazendo a validacao dos tipos de campos, por exemplo: o campo nome deve ser uma string, e assim
// por diante.

// 4 - Melhore o algoritmo da questao 3, impedindo que seja cadastrado um usuario com um email duplicado

// 5 - Agora imagine que estejamos criando a tela de edicao de usuario, crie uma funcao que faca a edicao de um usuario de acordo
// com o email cadastrado.

