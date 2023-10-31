// Desafio 2 dia 5 - DoDev thru

const opcao = prompt("Escolha o que deseja fazer: gasolina, alcool ou calibrar:")

switch(opcao){
    case "gasolina":
        const valorGasolina = Number(prompt("Quanto deseja abastecer em R$?"))
        console.log(`Seu carro foi abastecido com ${(valorGasolina / 5).toFixed(2)}L de gasolina!`)
    break;
    case "alcool":
        const valorAlcool = Number(prompt("Quanto deseja abastecer em R$?"))
        console.log(`Seu carro foi abastecido com ${(valorAlcool / 3).toFixed(2)}L de alcool!`)
    break;
    case "calibrar":
        console.log("pneus calibrados com sucesso!")
    break;
    default:
        console.log("Escolha uma das opções validas: gasolina, alcool ou calibrar")
    break;
}
