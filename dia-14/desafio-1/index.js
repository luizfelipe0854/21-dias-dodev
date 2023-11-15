// Desafio 1 - dia 14
var nome
var salario

function solicitar(){
    nome = prompt("Digite seu nome")
    salario = Number(prompt("Digite seu salario"))
    calcular(nome, salario)
}

function calcular(nome, salario){
    var aumento = 0

    if(salario <= 1500){
        aumento = 0.2
    }else if(salario <= 2000){
        aumento = 0.15
    }else if(salario <= 3000){
        aumento = 0.1
    }else{
        aumento = 0.05
    }

   let novoSalario = salario + (salario * aumento)

   console.log(`Olá ${nome}`)
   console.log(`Salário: ${salario}`)
   console.log(`Aumento: ${aumento * 100}%`)
   console.log(`Novo salário: ${novoSalario}`)

   perguntarNovamente()
}

function perguntarNovamente(){
    var resposta = prompt("Deseja continuar?(s/n)")

    if(resposta == "s"){
        solicitar()
    }else{
        console.log("Programa encerrado")
    }
}

solicitar()