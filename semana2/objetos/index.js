// --------------------------------------- Aula 07 - Objetos ---------------------------------------

// -------------------------- Exercícios de Interpretação de código --------------------------

// EXERCÍCIO 1
//  console.log(filme.elenco[0]) = O console.log vai imprimir o primeiro valor de elenco, que é:
// "Matheus Nachtergaele"

//  console.log(filme.elenco[filme.elenco.length - 1]) = O console imprimirá o último valor de elenco, que é
// "Virginia Cavendish"

//  console.log(filme.transmissoesHoje[2]) = O console imprimirá {canal: "Globo", horario: "14h"}, pois ele 
//acessou o objeto [2] de transmissõesHoje, que são as informações da Globo, de acordo com a ordem do objeto.

// EXERCÍCIO 2
//   a. O console log irá imprimir 3 mensagens diferentes. Para console.log(cachorro) será impresso o Objeto cachorro,
// com todas suas informações originais. No console.log(gato) será impresso tudo o que há no console.log(cachorro), 
//porém trocará o nome de "Juca" para "Juba". Já no console.log(tartaruga) será impresso tudo o que há em gato,
// mas substituirá todas as letras "a" por "o" no nome do Gato: "Jubo".
//   b. O spread ou espelhamento (...) copia um objeto ou array inteiro e permite alterações nele como
// adicionar uma propriedade, alterá-la.

// EXERCÍCIO 3
//  a. Console.log imprimirá "false" e "undefined".
//  b. Aconteceu que o pedido para o console foi para imprimir "backender" que está no objeto "pessoa", cujo valor
// é false. Depois ele solicita "altura", porém não existe esse valor, então o console retorna "undefined".

// -------------------------- Exercícios de Escrita de código --------------------------
// EXERCÍCIO 1
// a.  
// const pessoa = {
//     nome: "Thais",
//     apelidos: ["Thata", "Tha", "Thaty"],

// }

// const receberDepoisImprimir = (pessoa) => {
//     console.log(`O nome da pessoa é: ${pessoa.nome}, mas pode chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, 
//     ${pessoa.apelidos[2]}. `)

// }
// receberDepoisImprimir(pessoa)

// // b.
// const novaPessoa = {
//     ...pessoa,
//    apelidos: ["Thatazinha", "Thata", "Elfa Mágica"]
// }
// const receberDepoisImprimir1 = (novaPessoa) => {
//     console.log(`O nome da pessoa é: ${pessoa.nome}, mas pode chamar de: ${novaPessoa.apelidos[0]}, 
//     ${novaPessoa.apelidos[1]}, ${novaPessoa.apelidos[2]}`)
// }
// receberDepoisImprimir1 (novaPessoa)

// // EXERCÍCIO 2
const pessoa1 = {
    nome: "Gylfoyle",
    idade: 33,
    profissao: "Desenvolvedor",
   }
   const pessoa2 = {
    nome: "Richard",
    idade: 34,
    profissao: "CEO"
   }
   const receberEadicionar = (pessoa) => {
    const array = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    return array
   }
   receberEadicionar(pessoa1)
   console.log(array)

   receberEadicionar(pessoa2)
   console.log(array)

// // EXERCÍCIO 3
// // a,b,c,d.
const carrinho = []

const frutasDoSacolao1 = {
    nome: (`abacaxi`),
    disponibilidade: (true)
}

const frutasDoSacolao2 = {
    nome: (`banana`),
    disponibilidade: (true)
}

const frutasDoSacolao3 = {
    nome: (`pêra`),
    disponibilidade: (true)
}

const adicionarAoCarrinho = (frutasDoSacolao1, frutasDoSacolao2, frutasDoSacolao3) => {
    carrinho.push(frutasDoSacolao1, frutasDoSacolao2, frutasDoSacolao3)
}
adicionarAoCarrinho (frutasDoSacolao1, frutasDoSacolao2, frutasDoSacolao3)
console.log(carrinho)

