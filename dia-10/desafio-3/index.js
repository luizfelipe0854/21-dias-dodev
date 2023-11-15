// Desafio 3 - dia 10

let array = []
let contador = 0
let qntDesejada = parseInt(prompt("Quantos numero deseja digitar?"))

while(contador < qntDesejada){
    let numero = parseInt(prompt("Digite um numero"))
    array[contador] = numero
    contador++
}

let arrayInvertida = array.slice(0).reverse()

console.log(`array normal: ${array}`)

console.log(arrayInvertida)