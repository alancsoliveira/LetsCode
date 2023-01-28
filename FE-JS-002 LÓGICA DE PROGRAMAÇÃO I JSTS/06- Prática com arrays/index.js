
const arrayAlunos = [
  {
    nome: "alan",
    idade: 30
  },
  {
    nome: "Rafa",
    idade: 24
  }
]

for (aluno of arrayAlunos) {
  for (key in aluno){
    console.log(aluno[key])
  }
}
