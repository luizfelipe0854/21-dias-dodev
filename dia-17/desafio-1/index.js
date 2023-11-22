// Desafio 1 - dia 17

class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor(Id, IdHotel, NomeResponsavel, DiaEntrada, DiaSaida) {
        this.Id = Id
        this.IdHotel = IdHotel
        this.NomeResponsavel = NomeResponsavel
        this.DiaEntrada = DiaEntrada
        this.DiaSaida = DiaSaida
    }
}

let hoteis = []
let reservas = []
let IdHotel = 1
let IdReserva = 1


function CadastrarHotel() {
    let nome = prompt("Insira o nome do hotel:")
    let categoria = parseInt(prompt("Insira a categoria do hotel:"))
    let endereco = prompt("Insira o endereco do hotel:")
    let telefone = prompt("Insira o telefone do hotel:")
    let hotel = new Hotel(IdHotel, nome, categoria, endereco, telefone)
    IdHotel++
    hoteis.push(hotel)
}

function CadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Insira o ID do hotel"))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log("Hotel não cadastrado")
            }
        }
    } while (!existe)


    let NomeResponsavel = prompt("Insira o nome do responsável")
    let DiaEntrada = parseInt(prompt("Insira o dia da entrada"))
    let DiaSaida
    do {
        DiaSaida = parseInt(prompt("Insira o dia da saida"))
        if (DiaSaida < DiaEntrada) {
            console.log("O dia da saida deve ser maior que o dia da entrada")
        }
    } while (DiaSaida < DiaEntrada)

    let reserva = new Reserva(IdReserva, idHotel, NomeResponsavel, DiaEntrada, DiaSaida)
    IdReserva++
    reservas.push(reserva)
}


function buscarReservasPeloHotel(idHotel) {
    reservas.forEach((reserva) => {
        if (reserva.IdHotel == idHotel) {
            let i = idHotel - 1
            console.log(`hotel: ${hoteis[i].Nome}`)
            console.log(`responsavel: ${reserva.NomeResponsavel}`)
            console.log(`dia entrada: ${reserva.DiaEntrada}`)
            console.log(`dia saida: ${reserva.DiaSaida}`)
        }
    })
}

function buscarHotelPelaReserva(IdReserva) {
    let idHotel = reservas[IdReserva - 1].IdHotel
    console.log(`hotel: ${hoteis[idHotel - 1].Nome}`)
    console.log(`endereço: ${hoteis[idHotel - 1].endereco}`)
    console.log(`dia entrada: ${reservas[IdReserva - 1].DiaEntrada}`)
    console.log(`dia saida: ${reservas[IdReserva - 1].DiaSaida}`)
}




function buscarReservaPeloResponsavel(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].NomeResponsavel) {
            console.log(`Id da reserva: ${reservas[i].Id}`)
            console.log(`Hotel: ${hoteis[(reservas[i].IdHotel) - 1].Nome}`)
        }
    }
}

function buscarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

function atualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Numero de telefone atualizado!")
}


let continuar = true
do {
    let opcao = parseInt(prompt("O que deseja fazer? 1- Cadastrar Hotel || 2- Cadastrar reserva || 3- Procurar reserva pelo hotel || 4- Procurar hotel pela reserva || 5- Procurar reserva pelo responsavel || 6- Procurar hoteis por categoria || 7- Atualizar telefone || 8- encerrar programa "))

    switch (opcao) {
        case 1:
            CadastrarHotel()
            break;
        case 2:
            CadastrarReserva()
            break;
        case 3:
            buscarReservasPeloHotel(prompt("Digite o id do hotel"))
            break;
        case 4:
            buscarHotelPelaReserva(prompt("digite o id da reserva"))
            break;
        case 5:
            buscarReservaPeloResponsavel(prompt("Digite o nome do responsavel"))
            break;
        case 6:
            let hoteisProcurados = buscarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja")))
            console.log(hoteisProcurados)
            break;
        case 7:
            let idHotel = parseInt(prompt("digite o id do hotel que deseja atualizar"))
            let telefone = prompt("Digite o novo telefone")
            atualizarTelefone(idHotel, telefone)
            break;
        case 8:
            console.log("Programa encerrado")
            continuar = false
            break;
        default:
            console.log("Opção invalida")
            break
    }


} while (continuar)



