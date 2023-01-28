
let qtdMeias = 3
let qtSapatos = 1
let qtCamisetas = 2

let valorMeias = 19
let valorSapatos = 220
let valorCamisetas = 25

let valorTotalCompra
let descontoNaCompra = 50

function valorProdtudos(prod1, prod2, prod3) {
  valorTotal = prod1 + prod2 + prod3
  return (valorTotal)
}

function valorTotalProdudos(prod1, prod2, prod3, qtdProduto1, qtdProduto2, qtdProduto3) {
  valorTotalCompra = (prod1 * qtdProduto1) + (prod2 * qtdProduto2) + (prod3 * qtdProduto3)
  return (valorTotalCompra)
}

function desconto(valorTotal, desconto) {
  desconto = (100 - desconto) / 100
  let valorTotalComDesconto = valorTotal * desconto
  return valorTotalComDesconto
}


console.log(valorProdtudos(valorMeias, valorSapatos, valorCamisetas))
console.log(valorTotalProdudos(valorMeias, valorSapatos, valorCamisetas, qtdMeias, qtSapatos, qtCamisetas))
console.log(desconto(valorTotalCompra, descontoNaCompra))
