// 6 - Considere os arrays de nomes e idades e faca a ordenacao em order alfabetica no array de nomes e no array de idades 
// em ordem do maior para o menor 
console.log("q6")

names = ['Daiane', 'Fabricio', 'Ana', 'Walter']

const ages = [23, 18, 34, 20]

console.log(names.sort())

console.log(ages.sort().reverse())

console.log("")
//

// 7 - Crie um novo array que seja a juncao dos array de nomes e idades onde primeiro devera vir o nome e logo em seguida a idade
// ex: ['Daiane', 23, 'Fabricio', 18 ...]
console.log("q7")

const novoArray = []

for (let i = 0; i < names.length; i++) {
  novoArray.push(names[i])
  novoArray.push(ages[i])
}

console.log(novoArray)
console.log("")
// 
// 8 - Considerando o array do exercicio 7, crie um novo array somente com os nomes e outro somente com as idades
console.log("q8")
const novoArrayNames = []
const novoArrayAges = []

// novoArray.forEach(element => {
//   if (typeof (element) == "string") {
//     novoArrayNames.push(element)
//   } else {
//     novoArrayAges.push(element)
//   }
// });

for (let i = 0; i < novoArray.length; i++) {
  if (typeof (novoArray[i]) == "string") {
    novoArrayNames.push(novoArray[i])
    continue;
  }
  novoArrayAges.push(novoArray[i])
}

console.log(novoArrayNames)
console.log(novoArrayAges)

console.log("")
// 9 - Considerando os arrays criados no exercicio 8, busque o nome Fabricio e a idade 34 e salve-os em novas variaveis 
console.log("q9")
let nome = ""
let idade;
for (name of novoArrayNames) {
  if (name == "Fabricio") {
    nome = name
  }
  for (age of novoArrayAges) {
    if (age == 34) {
      idade = age
    }
  }
}

console.log(nome)
console.log(idade)

console.log("")
// 10 - Considerando o array de idades calculado no exercicio 7, faca o somatorio total das idades contidas nesse array e salve em 
// uma nova variavel 
console.log("q10")
let somaIdade = 0;

ages.forEach(element => {
  somaIdade += element
});

console.log(somaIdade)


console.log("")
// 11 - Considerando o array de idades calculado no exercicio 7, dobre o valor de cada item do array e salve em um novo array chamado
// idades duplicadas 
console.log("q11")

const idadesDuplicadas = []

ages.forEach(element => {
  idadesDuplicadas.push(element * 2)
});

console.log(idadesDuplicadas)


console.log("")


// 12 - Crie uma funcao que impeca que um nome duplicado seja adicionado ao array de nomes
console.log("q12")

function nameAlreadyExists(name) {
  if (names.includes(name)) {
    return ("Nome já existe")

  }
  names.push(name)
  return ("Incluído")
}

console.log(nameAlreadyExists("Daiane"))
console.log(names)


