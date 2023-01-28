/* ============================================================================================================================================================================
map()
===============================================================================================================================================================================*/

// Dobrar valores
const numbers = [1, 4, 5, 9, 14, 23]
const doubleNumbers = numbers.map(num => num * 2)
// console.log(doubleNumbers)

// fahrenheit para Celsius
const fahrenheit = [0, 32, 45, 50, 75, 80, 120]
const Celsius = fahrenheit.map(element => Math.round((element - 32) * 5 / 9))
// console.log(Celsius)


/* ============================================================================================================================================================================
filter() Usa-se quando é necessário remover elementos indesejados com base em algumas condições. Retorna um array ou objeto
===============================================================================================================================================================================*/

// Removendo valores repetidos de um array
const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]
const uniqueArray = yetAnotherArray.filter((element, index, arr) => arr.indexOf(element) === index)
// console.log(uniqueArray)


/* ============================================================================================================================================================================
reduce() Usa-se quando é necessário encontrar um valor cumulativo concatenado com base em elementos de todo o array.
===============================================================================================================================================================================*/

//Somar todos os valores
const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23, },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
]
 const totalLaunches = rockets.reduce((prevVal, element) => prevVal + element.launches, 0)
 console.log(totalLaunches)

/* ============================================================================================================================================================================
every() Quando é necessário testar se todos os elementos de um array passam por um teste específico. Retorna um booleano
===============================================================================================================================================================================*/

// Verificar se todos os elementos de um array são maior que 10

const anotherArray = [12, 5, 8, 130, 44]
// console.log(allAbove10 = anotherArray.every(element => element > 10))

// Verificar se todos são maiores de idade
const tchurma = [
  { id: 12, name: "Frederico", age: 8 },
  { id: 47, name: "Francisca", age: 17 },
  { id: 77, name: "Ramon", age: 48 },
  { id: 85, name: "Zenon", age: 52 },
]

// console.log(allAvove18 = tchurma.every(p => p.age >= 18))

/* ============================================================================================================================================================================
find() Quando é necessário pesquisar por um valor dentro de um array ou objeto. Retorna o primeiro elemento que satisfaz o teste.
===============================================================================================================================================================================*/

const pizzas = [
  "mussarela",
  "calabresa",
  "portuguesa",
  "marguerita"
]

// console.log(pizzas.find(p => p.startsWith("m")))

const fruits = [
  { name: "jaca", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "cereja", quantity: 5 },
]

// console.log(fruits.find(f => f.name === "jaca"))
