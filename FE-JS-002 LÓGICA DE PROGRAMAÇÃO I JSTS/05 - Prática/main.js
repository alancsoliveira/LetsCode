function getRandom(max) {
  return Math.floor(Math.random() * (max + 1))
}

function jogoDaadivinhacao() {
  let randomNumber = getRandom(10)
  let attempts = 0
  let kick = -1

  while (kick != randomNumber) {
    kick = prompt("Adivinha o número que estou pensando? Está entre 0 e 10")
    attempts++
    if (kick == null) {
      alert("Encerrando... Jogador desistiu! :-(")
      return
    }
    else if (kick > randomNumber) {
      kick = alert("Errado, tente um número menor:")
    }
    else if (kick < randomNumber) {
      kick = alert("Errado, tente um número maior:")
    }
  }

  alert(`Parabéns! Você adivinhou o número em ${attempts} tentativas`)
}

