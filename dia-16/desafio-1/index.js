// Desafio 1 - dia 16
let nomes = []
let senhas = []


function desejo(){
    let desejo = parseInt(prompt("O que deseja fazer? 1- cadastrar || 2- login || 3- excluir || 4- encerrar"))
    return desejo
}

function cadastro(){
    let nome = prompt("Digite seu nome")
    let senha = prompt("Digite uma senha")

    nomes.push(nome)
    senhas.push(senha)
}

function login(nome, senha){
    if(nomes.includes(nome)){
        let index = nomes.indexOf(nome)
        if(senha == senhas[index]){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

function exclusao(nome){
    if(nomes.includes(nome)){
        let index = nomes.indexOf(nome)
        nomes.splice(index,1)
        senhas.splice(index,1)
    }else{
        console.log("Nome não cadastrado")
    }
}

let continuar = true

while(continuar){
    let opcao = desejo()

    switch(opcao){
        case 1:
            cadastro()
        break;
        case 2:
            let nome = prompt("Digite seu nome")
            let senha = prompt("Digite sua senha")
            login(nome,senha)
            if(login){
                console.log("Login feito com sucesso")
            }else{
                console.log("Usuario ou senhas invalidos")
            }
        break;
        case 3:
            let nomeExcluir = prompt("Digite seu nome")
            exclusao(nomeExcluir)
        break;
        case 4:
            continuar = false
        break;
        default:
            console.log("Opção invalida. tente novamente")
        break;
    }
}