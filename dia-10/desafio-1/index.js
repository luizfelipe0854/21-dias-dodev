// Desafio 1 - dia 10

let array = []
let indice = []
let contador = 0


let numero = parseInt(prompt("Insira o numero desejado"))

for(let i = 0; i < 10; i++){
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}`))
    array[i] = elemento
}

for(let i = 0; i<10; i++){
    if(array[i] === numero){
        indice[contador] = i
        contador++
    }
}

console.log(`O numero ${numero} foi encontrado nos indices: ${indice}`)




