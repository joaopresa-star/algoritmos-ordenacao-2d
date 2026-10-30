const livros = require('./listaLivros');
const menorValor = require('./menorValor');

              // 1
for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual)

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  console.log('posicao atual', atual);
  console.log('livro atual', livroAtual );
  console.log('livro menor preço', livroMenorPreco);

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros)