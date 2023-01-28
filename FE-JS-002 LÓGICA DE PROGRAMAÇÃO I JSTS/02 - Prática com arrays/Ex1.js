/*
 * Imagine que voce trabalhe em uma empresa de food delivery e esteja atuando na tela de concatar a operacao.
 * Esta tela e acessada pelo usuario quando ele tem algum problema com o pedido. Quando o usuario acessa essa 
 * tela, nos enviamos pro nosso backend alguns informacoes sobre o usuario e pedido. 
 */

 // 1 - Caso o valor total do pedido seja maior que 150 reais, devemos  adicionar uma nova tag no array de tags. A 
 // tag que deve ser adicionada e a seguinte: 'order-bigger-than-150', caso contrario, devera ser adicionado a tag 
 // 'order-less-or-equal-than-150'

 // Insercao e remocao em listas 

 //array de tags 
 const tags = ['order'];
const itemsValue = [10, 56.8, 32.2, 12];

function verifica(total){
  if(total>150){
    tags.push('order-bigger-than-150')
    
  }else{
    tags.push('order-less-or-equal-than-150')
  }

}

function calcular(array){
  const novoArray = array
  let total=0;

  array.forEach(indexArray => {total+=indexArray})

  novoArray.push("teste")
  console.log(novoArray)
  return total
 
}




 verifica(calcular(itemsValue))
 
 console.log(itemsValue)
 
 console.log(tags)
 
 
 console.log("===============================================================")



 // 2 - Considere as informacoes do exercicio anterior para a execucao desse segundo exercicio. Imagine que o usuario
 // tenha adicionado mais um pedido no valor de 40 reais a sacola. Adicione o valor do item e faca a mesma operacao que 
 // foi feita no exercicio anterior 

 tags.pop();
 itemsValue.push(40)
 verifica(calcular(itemsValue))
 console.log(itemsValue)
 console.log(tags)

 console.log("===============================================================")
 
 // 3 - O seu gestor trouxe uma nova demanda cuja a necessidade e de rastrear as paginas acessadas pelo usuario e guardar em 
 // uma lista. Como voce faria pra ir guardando pagina a pagina na lista a medida que o usuario for acessando?


 // - Usuario acessou a 'pagina-inicial'
  // adicione a lista 
 // - Usuario acessou a 'pagina-de-produtos'
  // adicione a lista 
 // - Usuario acessou a 'pagina-de-checkout'
   // adicione a lista 
 // - Usuario acessou a 'pagina-inicial'
   // adicione a lista 

const listPage=[]

listPage.push('pagina-inicial')
listPage.push('pagina-de-produtos')
listPage.push('pagina-de-checkout')
listPage.push('pagina-inicial')
console.log(listPage)
console.log("===============================================================")

 // 4 - Considere array da questao 4. Como voce faria para ir removendo item a item da lista na ordem do ultimo ate o 
 // primeiro inserido?

 listPage.pop()
 console.log(listPage)
 console.log("===============================================================")

 // 5 - Considere array da questao 4. Como voce faria para ir removendo item a item da lista na ordem do primeiro ate o 
 // ultimo inserido?

 listPage.shift()
 console.log(listPage)