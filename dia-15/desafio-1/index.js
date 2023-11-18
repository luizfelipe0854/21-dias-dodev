// Desafio 1 - dia 15

let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]

function nComuns(arrayA, arrayB) {
    let arrayNumerosComuns = []
    let contador = 0
    for (let i = 0; i < arrayA.length; i++){
        for(let j = 0; j < arrayB.length; j++){
            if(arrayA[i] == arrayB[j]){
                arrayNumerosComuns[contador] = arrayA[i]
                contador++
                j = arrayB.length
            }
        }
    }
    return arrayNumerosComuns
}

console.log(nComuns(arrayA, arrayB))