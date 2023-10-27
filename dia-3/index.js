const nome = prompt("Insira seu nome:")
const idade = prompt("Insira sua idade:")
const altura = prompt("Insira sua altura:")
const peso = prompt("Insira seu peso:")


let anoNascimento = 2023 - parseInt(idade)

let IMC = Number(peso) / (altura * altura)


console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura}m de altura, pesa ${peso}kg e seu IMC é ${IMC.toFixed(2)} KG/m²`)