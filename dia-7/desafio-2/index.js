// Desafio 2 - dia 7

// caixa  eletronico Dodev

let saldo = 10000
let maiorValorInserido = 0
let somaValoresInseridos = 0
let totalTransacoes = 0
let continuar = false


do{
    let nome = prompt("Digite seu nome")
    let cpf = prompt("Digite seu cpf")
    let valor = Number(prompt("Digite o valor desejado:"))
    let opcao = prompt("Para saques ( S ) - Para depositos ( D )")

    if(valor < 0){
        console.log(`${nome}, digite um valor válido. Transação não realizada`)
    }else if(opcao === "S" && valor > saldo){
        console.log(`${nome}, saldo indisponivel. Transação não realizada`)
    }else if(opcao === "S"){
        saldo -= valor
        console.log(`Oi ${nome} ${cpf}, você acaba de sacar R$${valor.toFixed(2)} e seu saldo é ${saldo.toFixed(2)}`)
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        somaValoresInseridos += valor
        totalTransacoes++
    }else{
        saldo += valor
        somaValoresInseridos += valor
        totalTransacoes++
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log(`Oi ${nome} ${cpf}, você acaba de depositar R$${valor.toFixed(2)} e seu saldo é ${saldo.toFixed(2)}`)
    }
    
    const qrContinuar = prompt("Deseja continuar? 1 - SIM    2 - NÃO")
    if(qrContinuar == 1){
        continuar = true
    }else if(qrContinuar == 2){
        continuar = false
    }else{
        console.log("Opção invalida, saindo...")
        continuar = false
    }

}while(continuar)

console.log(`Saldo final: R$${saldo}`)
console.log(`Maior valor inserido: ${maiorValorInserido}`)
console.log(`Media valores inseridos: R$${somaValoresInseridos / totalTransacoes}`)







