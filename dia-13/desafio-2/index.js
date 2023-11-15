// Desafio 2 - dia 13

class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    resultado(distancia){
        return distancia / (this.velocidadeMaxima / this.aceleracao)
    }
}

class Corrida {
    nome
    tipo
    distancia
    participantes
    vencedor

    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.venvencedor = ""
    }

    Definirvencedor(){
        let menorTempo = this.participantes[0].resultado(this.distancia)
        let vencedor = this.participantes[0]

        for(let index = 1; index < this.participantes.length; index++){
            let tempo = this.participantes[index].resultado(this.distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }

        return this.vencedor = vencedor
    } 

    exibirVencedor(){
        console.log(`O vencedor é ${this.vencedor.nome}`)
    }
}

let corrida = new Corrida("Ferrari", "Formula1", 50000)

corrida.participantes[0] = new Carro("Audi", 120, 160, 5)
corrida.participantes[1] = new Carro("mercedes", 210, 200, 9)
corrida.participantes[2] = new Carro("fiat", 300, 220, 10)

corrida.Definirvencedor()
corrida.exibirVencedor()