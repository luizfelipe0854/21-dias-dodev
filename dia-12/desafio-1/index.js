// Desafio 1 - dia 12

let nomes = []
let senhas = []

let continuar = true


do {
    let opcao = parseInt(prompt("O que deseja fazer? 1- CADASTRAR || 2- LOGIN || 3- EXCLUIR || 4- ENCERRAR"))
    switch (opcao) {
        case 1:
            let nomeDigitado = prompt("Digite seu nome")
            let senhaDigitada = prompt("Digite sua senha")

            nomes.push(nomeDigitado)
            senhas.push(senhaDigitada)

            console.log("Cadastrou")

            break;
        case 2:
            let loginNome = prompt("Digite seu nome")
            let loginSenha = prompt("Digite sua senha")

            let indexNome = nomes.indexOf(loginNome)

            if (indexNome >= 0) {
                if (loginSenha == senhas[indexNome]) {
                    console.log("SUCESSO, voce logou")
                } else {
                    console.log("Senha invalida")
                }
            } else {
                console.log("Esse nome não está cadastrado")
            }
            break;
        case 3:
            let apagarNome = prompt("Digite seu nome")

            let apagarNomeIndex = nomes.indexOf(apagarNome)

            if (apagarNomeIndex >= 0) {
                nomes.splice(apagarNomeIndex,1)
                senhas.splice(apagarNomeIndex,1)

                console.log("Nome removido")
            } else {
                console.log("Esse nome não está cadastrado")
            }
            break;
        case 4:
            continuar = false
            console.log("Programa encerrado")
            break;
    }
} while (continuar)