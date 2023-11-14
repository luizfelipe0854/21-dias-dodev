// Desafio 2 - dia 11

let modelos = []
let anos = []
let valores = []
let contador = 0 

let continuar = false

do{
    let modeloDigitado = prompt("Digite o modelo do carro")
    let anoDigitado = parseInt(prompt("Digite o ano do carro"))
    let valorDigitado = Number(prompt("Digite o valor do carro"))

    modelos[contador] = modeloDigitado
    anos[contador] = anoDigitado
    valores[contador] = valorDigitado
      
    contador++

    let deseja = parseInt(prompt("Digite 1 para cadastrar mais carros e 2 para encerrar o programa"))
    if(deseja == 1){
        continuar = true
    }else{
        console.log("programa encerrado")
        continuar = false
    }

}while(continuar)


console.log("Carros cadastrados")
for(let c = 0; c < contador; c++){
    console.log(`${modelos[c]}, ${anos[c]} Valor: R$${valores[c]}`)
}

for(let i = 0; i < contador - 1; i++){
    for(let j = 0; j < contador - i -1; j++){
        if(valores[j] > valores[j + 1]){
            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor
            
            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor
            
            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço:")
for(let i = 0; i < contador; i++){
    console.log(`${modelos[i]} - ${anos[i]} - ${valores[i]}`)
}


