// 1 - Crie uma agenda de contatos que armazene 6 contatos em um array, modelando o "contato" como um objeto. O modelo de contato deve ter as seguintes informacoes: (nome, sobrenome, telFixo, celular)

const agenda = [];

function addContato(nome, sobrenome, telFixo, celular) {
    const contato = {
        nome: nome,
        sobrenome: sobrenome,
        telFixo: telFixo,
        celular: celular
    }

    agenda.push(contato);
}

addContato("Marilia", "Parente", "(81)3434-2466", "(81)99933-6666");
addContato("Joana", "Bezerra", "(81)3420-2477", "(81)99733-7777");
addContato("Arthur", "Lundgren", "(81)3434-2455", "(81)99933-5555");
addContato("Antônio", "Nolasco", "(81)3435-2411", "(81)99933-1111");
addContato("Maicon", "Kuster", "(81)3435-2422", "(81)99933-2222");
addContato("Marielle", "Franco", "(81)3435-2499", "(81)99933-9999");

console.log(agenda);