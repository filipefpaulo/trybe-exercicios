// Agora a prática
// Para os exercícios propostos use o seguinte template:
// Copiar
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // Adicione o código do exercício aqui:
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map
// Copiar
// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

function formatedBookNames() {
  // escreva seu código aqui
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

console.log('Exercício 1');
console.log(formatedBookNames());

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort
// Copiar
// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

function nameAndAge() {
  // escreva seu código aqui
  return books
    .map((book) => {
      return {age: book.releaseYear - book.author.birthYear, author: book.author.name};
    })
    .sort((author1, author2) => author1.age - author2.age);
}

console.log('Exercício 2');
console.log(nameAndAge());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;
// Copiar
// const expectedResult = [
//   { 
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}

console.log('Exercício 3');
console.log(fantasyOrScienceFiction());

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort
// Copiar
// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

function oldBooksOrdered() {
  // escreva seu código aqui
  return books
    .filter((book) => 2021 - book.releaseYear >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log('Exercício 4');
console.log(oldBooksOrdered());

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
// Copiar
// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
//   let filter = books.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
//   let author = filter.map(book => book.author.name);
//   return author.sort();

  return books
    .filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map((book) => book.author.name)
    .sort()
}

console.log('Exercício 5');
console.log(fantasyOrScienceFictionAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// Copiar
// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

function oldBooks() {
  // escreva seu código aqui
  return books
    .filter((book) => 2021 - book.releaseYear >= 60)
    .map(book => book.name);
}

console.log('Exercício 6');
console.log(oldBooks());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
// Copiar
// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((book) => {
      return book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3;
    }).name;
}

console.log('Exercício 7');
console.log(authorWith3DotsOnName());
