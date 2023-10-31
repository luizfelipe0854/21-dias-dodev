// Desafio 4 - dia 6

// tabuada do numero escolhi do e dos dois proximos

const numero = parseInt(prompt("Escolha um numero:"))
const tabuada = parseInt(prompt("Até qual numero voce deseja saber a tabuada?"))

for(let i = numero; i <= numero + 2; i++){
    console.log(`Tabuada do ${i}`)
    for(let tab = 0; tab <= tabuada; tab++){
        console.log(`${i} x ${tab} = ${i * tab}`)
    }
    console.log("======================")
}






