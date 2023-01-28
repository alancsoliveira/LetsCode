class contaCorrent {
  #id;
  #agencia;
  #conta;
  #saldo;

  getAgencia() {
    return this.#agencia
  }
}

const conta = new contaCorrent()

conta.agencia=0001
conta.conta=1000

console.log(contaCorrent.toString())
console.log(conta)
