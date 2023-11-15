// Desafio 1 - dia 13

class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

    exibir(){
        console.log(`Olá meu pc é um ${this.tipo}, tem o processador ${this.processador}, possui o video ${this.video}, possui ${this.armazenamento}GB de armazenamento, possui ${this.memoriaRam}GB de RAM e ${this.ssd? "Possui um sdd":"não tem ssd"}`)
    }
}

let meuPC = new Computador("desktop","Ryzen 5 5600X","dedicado","1000","16",true)

console.log(meuPC.exibir())