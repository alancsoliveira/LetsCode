// try catch and finally
/*

try {
/// Executa o nosso processo
}catch(){
/// Captura as possiveis excecoes/erro
}
*/

const user = {
  name: "Alan",
  email: "alan@gmail.com",
  address: null,
}

// try {
//   console.log(user.address.state)
// } catch (error) {
//   console.log("Ocorreu um erro", typeof Obje)
// }
// finally {
//   con sole.log("Não preenchido")
// }

const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Os atributos a e b devem ser do tipo number")
  }
  return a + b
}

try {
  console.log(sum(user, 1))
} catch (e) {
  console.log(e.message)
}
