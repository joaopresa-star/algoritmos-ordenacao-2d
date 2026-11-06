const livros = require('./listaLivros');
const menorValor = require('./menorValor');


for (let atual = 0; atual < livros.length; atual++){
let menor = menorValor(livros, atual);

let livroAtual = livros[atual];
let levroMenorPreco = livros[menor];



 console.log('posicao atual', atual);
 console.log('livro atual', livroAtual);
 console.log('livro menor preco', livroMenorPreco);

livros[atual] = livroMenorPreco;
livros[menor] = livroAtual;
}
