// Desafio 1 - dia 6

// contagem de 0 até o número escolhido 

const val = parseInt(prompt("Insira um número: "))

if (val >= 0) {
    for (let contador = 0; contador <= val; contador++) {
        console.log(contador)
    }
}else{
    console.log("Digite um número maior que 0")
}





