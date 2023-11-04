// Desafio 1 - dia 7

// DoDev School(WHILE)

let contador = 1
let qntAlunos = parseInt(prompt("Quantos alunos voce deseja cadastrar?"))
let mediaGeral = 0
let qntHomens = 0
let mulheresMaisQue7  = 0
let maiorNotaHomens = 0


while(contador <= qntAlunos){
    let sexo = prompt(`qual o seu sexo do ${contador}º aluno ? (m / f)`)
    let nota = parseInt(prompt("Digite  sua  nota"))

    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qntHomens++
    }

    if(sexo == "f" && nota  >  7){
        mulheresMaisQue7++
    }

    mediaGeral += nota    
    contador++
}

mediaGeral = mediaGeral / qntAlunos

console.log(`A média geral entre os alunos é ${mediaGeral.toFixed(1)}`)
console.log(`${qntHomens} homens enviaram a nota`)
console.log(`${mulheresMaisQue7} mulheres tiraram mais que 7`)
console.log(`${maiorNotaHomens} foi a maior nota entre os homens`)






