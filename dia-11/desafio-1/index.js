// Desafio 1 - dia 11

let nomes = []
let notas = []
let contador = 0
let continuar = false

do{
    let aluno = prompt("Digite o nome do aluno ")
    let notaA = parseInt(prompt("Digite a nota do aluno"))

    nomes[contador] = aluno
    notas[contador] = notaA
    contador++

    let qrContinuar = parseInt(prompt("Deseja continuar? 1-SIM  2-NÃO"))
    if(qrContinuar == 1){
        continuar = true
    }else{
        console.log("Programa encerrado")
        continuar = false
    }

}while(continuar == true)

for(let c = 0; c < contador; c++){
    console.log(`Nota aluno(a) ${nomes[c]} foi ${notas[c]}`)
}

let soma = notas.reduce((total, num) => total + num, 0);

console.log(`A soma de todas as notas é ${soma}`)
console.log(`A média das notas é ${(soma / nomes.length).toFixed(1)}`)




