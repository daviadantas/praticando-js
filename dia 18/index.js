let livros = []
let bibliotecas = []

class Livro{
    titulo
    autor
    editora
    anoDePublicacao
    disponibilidade = true
    constructor(titulo,autor,editora,anoDePublicacao,disponibilidade){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoDePublicacao = anoDePublicacao
        this.disponibilidade = disponibilidade
    }
}

class Biblioteca{
    nome
    endereco
    telefone
    acervoDeLivros = []
    constructor(nome,endereco,telefone,acervoDeLivros){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoDeLivros = acervoDeLivros
    }
}

function CadastroLivro(){
   let contador = 0
   let titulo = prompt('digite o titulo do livro')
   let autor = prompt('digite o nome do autor do livro')
   let editora = prompt('digite o nome da editora')
   let anoDePublicacao = parseInt(prompt('digite o ano de pulicação'))
   let disponibilidade = prompt('o livro esta disponivel s/n?')
   if(disponibilidade == 'n'){
    disponibilidade = false
   }
   let livro = new Livro(titulo, autor, editora, anoDePublicacao, disponibilidade)
   livros[contador] = livro
   contador++
}

function CadastroBiblioteca(){
    let contador = 0
    let nome = prompt('digite o nome da bibli')
    let endereco = prompt('digite o endereço da biblioteca')
    let telefone = prompt('sigite o numero de telefone')
    let quantidade = parseInt(prompt('digite a quantodade de livros que tem na biblioteca:'))
    let acervoDeLivros = []
    for(i=0; i < quantidade; i++){
        let idLivro = parseInt(prompt('digite o indicido livro que você quer adicionar'))
        let livro = livros[idLivro]
        acervoDeLivros[i] = livro
    }

    let biblioteca = new Biblioteca(nome,endereco,telefone,acervoDeLivros)
    bibliotecas[contador] = biblioteca  
}

function ProcurarLivro(nome, acervoDeLivros){
let id = prompt('digite o nome da biblioteca')
if(id == nome){
    let pergunta = prompt('digite o nome do livro que você busca')
    let perguntaL = acervoDeLivros.find(elemento => elemento.titulo == pergunta)
    if(perguntaL){
        console.log('esse livro esta disponivel')
        console.log('o autor do livro '+perguntaL.titulo+' é o escritor '+perguntaL.autor+' a editora do livro foi a '+perguntaL.editora+' o ano de publicação do livro foi em '+ perguntaL.anoDePublicacao)
    }
    else{
        console.log('a biblioteca não tem esse livro')
    }
}
else{
    alert('nome de biblioteca invalida')
}
}

function EmprestimoDeLivro(){
    let idLivro = parseInt(prompt('digite o indicador do livro'))
    let livro = livros[idLivro]
    if(livro.disponibilidade){
        console.log('o livro esta disponivel pode levar')
        livro.disponibilidade = false
    }
    else{
        console.log('o livro não esta disponivel')
    }
}

function DevolucaoDeLivros(){
    let idLivro = parseInt(prompt('digite o indicador do livro'))
    let livro = livros[idLivro]
    if(livro.disponibilidade){
        console.log('o livro esta disponivel')
        
    }
    else{
        console.log('obrigado por devolver')
        livro.disponibilidade = true
    }
}

let continuar = true

while(continuar){ 
    let opcao = parseInt(prompt('digite 1 para cadastrar um livro/2 para cadastrar uma biblioteca/3 para procurar livro/4 para pegar um livro/ 5 para devolver um livro'))
    switch (opcao){
        case 1:
            CadastroLivro();
            break;
        case 2:
            CadastroBiblioteca();
            break;
        case 3:
            ProcurarLivro();
            break;
        case 4:
            EmprestimoDeLivro();
            break;
        case 5:
            DevolucaoDeLivros();
            break;
        default:
            alert('opção invalida')
            break
    }
}

