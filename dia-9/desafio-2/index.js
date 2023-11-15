// Desafio 2 - dia 9

// Rh Dodev
let confirmar
let calcComAumento

while(confirmar != 1) {
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    let salarioAtual = Number(prompt("Digite seu salario atual"))
    calcComAumento = salarioAtual

    console.log(`Nome: ${nome}`)
    console.log(`Idade: ${idade}`)
    console.log(`Salário atual: R$${salarioAtual}`)

    let verificacao = parseInt(prompt("As informações estão corretas? 1-SIM | 2-NAO"))

    if (verificacao == 1) {
        console.log("Informações confirmadas")
        confirmar = 1
    } else if (verificacao == 2) {
        console.log("Corrija suas informações")
    } else {
        console.log("Opção inválida, recomendamos corrigir suas informações ")
    }
}

let aumento = 0.015

for (let contador = 1; contador <= 10; contador++) {
    calcComAumento += calcComAumento * aumento
    aumento *= 2
    console.log(`${2023 + contador} - R$${calcComAumento.toFixed(2)}`)
}








