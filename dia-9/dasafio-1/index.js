// Desafio 1 - dia 9

// Conhecendo o usuario
let continuar = false

do{
let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let peso = parseInt(prompt("Digite seu peso em KG:"))
let altura = Number(prompt("Digite sua altura:"))
let profissao = prompt("Digite sua profissão:")

if( idade >= 18){
    console.log("Está liberado para tomar umas geladas")
}else{
    console.log("Sem geladas para você")
}

console.log(`Sua idade em meses é: ${(idade * 12)}`)
console.log(`Sua idade em semanas é: ${idade * 52}`)
console.log(`Sua idade em dias é: ${idade * 365}`)

// Calculando o IMC

console.log("+++++++++++++++++++++++++++++")

let IMC = (peso / (altura * altura)).toFixed(1)

if(IMC < 18,5){
    console.log(`Seu IMC é ${IMC}kg/m², isso significa Magreza`)
}else if(IMC >= 18,5 && IMC < 24,9){
    console.log(`Seu IMC é ${IMC}kg/m², isso significa que seu peso está normal`)
}else if(IMC >= 24,9 && IMC < 30){
    console.log(`Seu IMC é ${IMC}kg/m², isso significa que você está acima do peso`)
}else{
    console.log(`Seu IMC é ${IMC}kg/m², isso significa que você está obeso`)
}

let anoNasc = 2023 - idade

console.log(`Você nasceu em ${anoNasc}`)

for(let contador = 0; contador <= idade; contador++){
    console.log(`${anoNasc + contador} - ${contador} anos de idade`)
}

let qrContinuar = parseIn(prompt("Deseja continuar? 1-SIM   2-NAO"))

if(qrContinuar == 1){
    continuar = true
}else if(qrContinuar == 2){
    continuar = false
}else{
    console.log("Numero invalido, programa encerrado")
    continuar = false
}}while(continuar)








