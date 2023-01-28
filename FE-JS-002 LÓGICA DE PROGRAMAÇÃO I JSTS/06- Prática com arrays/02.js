// Questao 2 - Uso de funcoes
// Imagine que voce esteja executando uma tarefa onde voce devera mostra um "modal" para o usuario com um titulo, e dois botoes
// um de confirmar e outro de cancelar. Porem, voce sabe que essa funcao podera ser usada em diversos cenarios e diversas vezes
// no futuro, entao voce com um otimo desenvolvedor, resolveu criar essa funcao com o seguinte padrao
// modal(tituloModal, callbackBtnConfirmar, callbackBtnCancelar). Dessa forma, quando essa funcao for usada, o desenvolvedor
// tera a liberdade de mudar nao so o titulo do modal, como tambem o comportamento que ira ser disparado quando o usuario
// clicar no botao aceitar ou rejeitar. Desenvolva essa funcao. Dica, uso o confirm para mostrar o "modal".

// functions

// normal functions
// function soma(a, b) {
//     return a + b;
// }
// const soma = (a, b) => a + b

// console.log(soma(1,2))

// anonymous functions
function soma() {
  //...
}
const array = [1, 2, 3, 4, 5]

// function fn(item) {
//     console.log('item', item)
// }

//array.map(fn)

// function map(callback) {
//   //...
//   const item = {name: 'name'}
//   callback(item)
// }
users.forEach((item) => {})
// callback functions
function itareteArrayObject(arrayObject, callback) {
  for (const user of arrayObject) {
    for (const key in user) {
      callback(key, user[key])
    }
  }
}

const c = (key) => console.log(key)

// itareteArrayObject(users, c)
// itareteArrayObject(users, function(key) {
//     alert(key)
// })
