// Desafio 1 - dia 18

class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true
    constructor(Titulo, Autor, Editora, AnoPublicacao) {
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.AnoPublicacao = AnoPublicacao
    }
}

let LivrosCadastrados = []

LivrosCadastrados.push(new Livro("Ayrton Senna: Uma Lenda a Toda Velocidade", "Christopher Hilton", "Copola Livros", 2009))
LivrosCadastrados.push(new Livro("Livro legal 2", "Luiz", "Editora A", 2010))
LivrosCadastrados.push(new Livro("Livro legal 3", "Felipe", "Editora B", 2013))
LivrosCadastrados.push(new Livro("Livro legal 4", "Matheus", "Editora C", 2015))
LivrosCadastrados.push(new Livro("Livro legal 5", "Jose", "Editora D", 2012))

class Biblioteca {
    Nome
    Endereco
    Telefone
    Acervo = []
    constructor(Nome, Endereco, Telefone, Acervo) {
        this.Nome = Nome
        this.Endereco = Endereco
        this.Telefone = Telefone
        this.Acervo = Acervo
    }

    buscarLivro(nome) {
        LivrosCadastrados.forEach((livro) => {
            if (livro.Titulo == nome) {
                console.log(`Titulo: ${livro.Titulo}`)
                console.log(`Autor: ${livro.Autor}`)
                console.log(`Editora: ${livro.Editora}`)
                console.log(`Ano de Publicação: ${livro.AnoPublicacao}`)
            }
        })

    }


    fazerEmprestimo(nome) {
        LivrosCadastrados.forEach((livro) => {
            if (livro.Titulo == nome && livro.Disponibilidade == true) {
                livro.Disponibilidade = false
                console.log("Livro reservado para você")
                return true
            } else if (livro.Titulo == nome && livro.Disponibilidade == false) {
                return false
            }
        })
    }

    fazerDevolucao(nome) {
        LivrosCadastrados.forEach((livro) => {
            if (livro.Titulo == nome) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }
}

let biblioteca = new Biblioteca("Biblioteca do Luiz", "rua da biblioteca", "1234")

biblioteca.buscarLivro("Livro legal 2")
biblioteca.fazerEmprestimo("Ayrton Senna: Uma Lenda a Toda Velocidade")
biblioteca.fazerDevolucao("Ayrton Senna: Uma Lenda a Toda Velocidade")