// Considere o array de objetos 'alunos' que contem as informacoes dos alunos de uma escola do ensino médio
// Esta no final do ano e os alunos ja fizeram todas as provas dos 4 bimestres do ano letivo e voce esta
// desenvolvendo a tela do sistema da escola onde os alunos irao acessar para saber em qual dos casos eles 
// se encontram: passou direto, reprovado direto, recuperacao final
// de acordo com as regras abaixo, escreva o algorimo que calcule e separe corretamente cada aluno 
// no respectivo array: alunosRecuperacaoFinal, alunosPassaramDireto, alunosReprovados. 
// devera ser inserido um objeto com as informacoes do aluno como: nome, media, percentual. 
// As regras sao as
// se tiver 80% ou mais de presenca e media maior ou igual a 7 -> passou direto 
// se tiver menos de 80% de presenca e nota maior ou igual a 7 ou 
// 80% ou mais de presenca e nota inferior a 7 -> prova de recuperacao final 

// se tiver menos que 80% de presenca e nota menor que 7 -> reprovado direto 
// a quantidade total de aulas dadas no ano e de 240 aulas

const alunosRecuperacaoFinal = [];
const alunosPassaramDireto = [];
const alunosReprovados = [];

const alunos = [{

  nome: 'Alan',
  n1: 7,
  n2: 7,
  n3: 7,
  n4: 7,
  p: 220,
}, {
  nome: 'Fábio',
  n1: 7,
  n2: 5,
  n3: 9,
  n4: 4,
  p: 120,
}, {
  nome: 'Bruna',
  n1: 7,
  n2: 8,
  n3: 9,
  n4: 10,
  p: 200,
}, {
  nome: 'Carla',
  n1: 2,
  n2: 5,
  n3: 8,
  n4: 10,
  p: 200,
}, {
  nome: 'Keilla',
  n1: 7,
  n2: 6,
  n3: 8,
  n4: 10,
  p: 45,
}, {
  nome: 'Marcos',
  n1: 5,
  n2: 7,
  n3: 4,
  n4: 8,
  p: 130,
}, {
  nome: 'Ana',
  n1: 10,
  n2: 10,
  n3: 3,
  n4: 2,
  p: 221,
}, {
  nome: 'Thiago',
  n1: 1,
  n2: 3,
  n3: 3,
  n4: 9,
  p: 240,
}, {
  nome: 'Athos',
  n1: 1,
  n2: 4,
  n3: 4,
  n4: 5,
  p: 50,
}]

//======================================================================================
function fNoteAverage(nota1, nota2, nota3, nota4) {
  let average = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2)
  return average;
}

function fPresenceAverage(presence) {
  let pAverage = (Number(presence) / 240) * 100
  return pAverage;
}

function fResult(aluno) {
  const average = fNoteAverage(aluno.n1, aluno.n2, aluno.n3, aluno.n4)
  const presence = fPresenceAverage(aluno.p)
  let message = ""

  if (presence >= 80 && average >= 7)
    message = "Passou direto"
  else if ((presence < 80 && average >= 7) || (presence >= 80 && average < 7))
    message = "Prova de recuperacao final"
  else if (presence < 80 && average < 7)
    message = "Reprovado direto"

  return message;
}

function updateVectors() {
  alunos.forEach(aluno => {
    switch (fResult(aluno)) {
      case "Passou direto":
        alunosPassaramDireto.push(aluno,)
        break

      case "Prova de recuperacao final":
        alunosRecuperacaoFinal.push(aluno)
        break

      case "Reprovado direto":
        alunosReprovados.push(aluno)
        break
    }
  });
}

updateVectors()

console.log('Os alunos em recuperacao final foram')
console.log(alunosRecuperacaoFinal)

console.log('Os alunos em recuperacao final foram')
console.log(alunosRecuperacaoFinal)

console.log('Os alunos em recuperacao final foram')
console.log(alunosRecuperacaoFinal)