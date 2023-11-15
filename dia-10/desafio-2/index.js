// Desafio 2 - dia 10

let array = []
let contador = 0

while(contador < 5){
    let numero = parseInt(prompt("Digite um numero"))
    array[contador] = numero
    contador++
}

let arrayInvertida = array.slice(0).reverse()

console.log(`array normal: ${array}`)

console.log(arrayInvertida)



