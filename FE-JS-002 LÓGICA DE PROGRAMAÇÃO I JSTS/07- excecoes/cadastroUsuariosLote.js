// 2 - Imagine que estejamos criando uma tela para cadastro de usuários para um sistema. Imagine que nesse sistema, podemos fazer o cadastro de usuários em lote, ou seja, a partir de uma tela, podemos cadastrar diversos usuários. Crie um algoritmo com uma funcao que, adicione um novo usuario a uma lista de usuarios e faca a insercao de 5 novos usuarios. Cada usuário deve ter as seguintes informacoes: (nome, sobrenome, email, idade, é administrador?)

// 3 - Melhore o algoritmo da questao 2 fazendo a validacao dos tipos de campos, por exemplo: o campo nome deve ser uma string, e assim por diante.

// 4 - Melhore o algoritmo da questao 3, impedindo que seja cadastrado um usuario com um email duplicado

// 5 - Agora imagine que estejamos criando a tela de edicao de usuario, crie uma funcao que faca a edicao de um usuario de acordo com o email cadastrado.

// ARRAY DE OBJETOS: CADA OBJETO REPRESENTA UM USUARIO
const listaGeral = [{
  nome: "Elias",
  sobrenome: "Eduardo",
  email: "eduelias@gmail.com",
  idade: 18,
  ehAdministrador: false
}];

console.log(listaGeral);

const loteUsuarios = [];

// FUNCAO: CHECA DISPONIBILIDADE DE E-MAIL
function checaDispEmail(email) {
  let emailDisponivel = true;
  listaGeral.forEach(e => {
      if (e.email === email) emailDisponivel = false;
  });
  return emailDisponivel;
}

// FUNCAO: CADASTRO DE UM USUARIO NO LOTE
function cadastroUnico(nome, sobrenome, email, idade, ehAdministrador) {

  // Checa se o email esta diponivel - false para email ja cadastrado
  if (!checaDispEmail(email)) {
      console.log("Email ja cadastrado.");
      return;
  }

  // Verifica tipos
  const verificaNome = typeof nome === "string";
  const verificaSobrenome = typeof sobrenome === "string";
  const verificaEmail = typeof email === "string";
  const verificaIdade = typeof idade === "number";
  const verificaAdm = typeof ehAdministrador === "boolean";

  // Impede o cadastro de usuarios com tipo dos dados diferente
  if (verificaNome && verificaSobrenome && verificaEmail && verificaIdade && verificaAdm) {
      const usuario = {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          idade: idade,
          ehAdministrador: ehAdministrador
      }

      loteUsuarios.push(usuario);
  }
  else {
      console.log("Os dados inseridos tem tipo invalido. O usuario nao foi cadastrado.");
  }

}

cadastroUnico("Aline", "Azevedo", "alinea@gmail.com", 22, false);
cadastroUnico("Breno", "Braga", "breno_braga@gmail.com", 23, false);
cadastroUnico("Carlos", "Cardoso", "ccardoso2007@gmail.com", 27, false);
cadastroUnico("Dayane", "Dias", "dayane.diretoria@gmail.com", 40, true);
cadastroUnico("Elias", "Eduardo", "eduelias@gmail.com", 18, false);

// FUNCAO: CADASTRO DE CADA USUARIO DO LOTE NA LISTA GERAL
function cadastroMultiplo(lote) {
  lote.forEach(e => {
      listaGeral.push(e);
  });

  // Limpa o lote para o proximo cadastro
  loteUsuarios.length = 0;
}

cadastroMultiplo(loteUsuarios);

console.log(listaGeral);

cadastroUnico("Fabio", "Farias", "fabiofaarias@gmail.com", 33, true);
cadastroUnico("Guilherme", "Gomes", "gugagomes@gmail.com", 19, false);
cadastroUnico("Hugo", "Henrique", "hugo_1997@gmail.com", 25, false);
cadastroUnico("Iago", "Inacio", "iago_surf@gmail.com", 23, false);
cadastroUnico("Joao", "Jose", "jj2000@gmail.com", 27, false);
cadastroUnico("Kleber", 1, 1, "tipo errado", "tipo errado");

cadastroMultiplo(loteUsuarios);

console.log(listaGeral);

// FUNCAO: EDITA USUARIO
function editaUsuario(email, nome = "default", sobrenome = "default", idade = "default", ehAdministrador = "default") {
  const usuario = listaGeral.find(e => e.email === email);

  if (usuario !== undefined) {
      switch (true) {
          case nome !== "default":
              usuario.nome = nome;
          case sobrenome !== "default":
              usuario.sobrenome = sobrenome;
          case idade !== "default":
              usuario.idade = idade;
          case ehAdministrador !== "default":
              usuario.ehAdministrador = ehAdministrador;
      }
  }
}

editaUsuario("gugagomes@gmail.com", "default", "Barreto");
console.log(listaGeral);