//DESAFIO 1 - JANTAR ESPECIAL? 

let isFome = prompt("Você está com fome?")
let isDinheiro = prompt("Você tem dinheiro?")
let isAberto = prompt("o restaurante está aberto?")


if (isFome == "nao" || isDinheiro == "nao") {
    console.log("Hoje a janta vai ser em casa")
} else if (isFome == "sim" && isDinheiro == "sim" && isAberto == "nao") {
    console.log("Peça um delivery")
} else if(isFome == "sim" && isDinheiro == "sim" && isAberto == "sim"){
    console.log("Hoje o jantar vai ser no seu restaurante favorito")
}
    
