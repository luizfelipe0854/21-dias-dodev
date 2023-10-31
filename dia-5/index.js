// Desafio dia 5 - Calculadora Dodev

const num1 = Number(prompt("Insira o primeiro numero: "))
const num2 = Number(prompt("Insira o segundo numero: "))
const operacao = prompt("Insira a operação desejada (+, -, *, / ou %): ")

switch(operacao){
    case "+":
        console.log(`O resultado da adição: ${num1} + ${num2} é ${num1 + num2}`)
        break;
    case "-":
        console.log(`O resultado da subtração: ${num1} - ${num2} é ${num1 - num2}`)
        break;
    case "*":
        console.log(`O resultado da multiplicação: ${num1} x ${num2} é ${num1 * num2}`)
        break;
    case "/":
        console.log(`O resultado da divisão: ${num1} / ${num2} é ${num1 / num2}`)
        break;
    case "%":
        console.log(`O módulo de ${num1} % ${num2} é ${num1 % num2}`)
        break;
    default:
        console.log("Digite uma das operações válidas: +, -, *, / ou % ")
}
