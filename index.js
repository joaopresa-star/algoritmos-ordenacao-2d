const livros = require('./listaLivros');

let maisBarato = 0; 

for (let atual = 0; atual < livros.length; atual++){
    
    if (livros[atual] < livros[maisBarato]){
        maisBarato = atual;
    }
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo é Livros ${livros[maisBarato].titulo}`)