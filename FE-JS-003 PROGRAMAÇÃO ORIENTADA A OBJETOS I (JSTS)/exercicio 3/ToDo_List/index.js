const formulario = document.createElement('form')
const inputAtividade = document.createElement('input')
const inputDataAtividade = document.createElement('input')
const selectTagsPrioridade = document.createElement('select')
const optionTagsPrioridade = document.createElement('option')
const botao = document.createElement('button')

const divNovaAtividade = document.querySelector('.nova-atividade')

const todoList = document.querySelector('.todoList')


const arrayOpcoes = ['Altíssima', 'Alta','Normal','Baixa']
arrayOpcoes.map(opcao =>{
  const optionTagsPrioridade = document.createElement('option')
  optionTagsPrioridade.textContent = opcao
  selectTagsPrioridade.appendChild(optionTagsPrioridade)
});

botao.textContent = 'Adicionar'
botao.type = 'submit'

inputAtividade.type = 'text'
inputAtividade.placeholder = 'Informar a atividade'
inputDataAtividade.type = 'date'


formulario.appendChild(inputAtividade)
formulario.appendChild(inputDataAtividade)
formulario.appendChild(selectTagsPrioridade)
formulario.appendChild(botao)

divNovaAtividade.appendChild(formulario)


botao.addEventListener('click', function(event){
  event.preventDefault()
  const valorInputAtividade = optionTagsPrioridade.value
  console.log(optionTagsPrioridade)
})



