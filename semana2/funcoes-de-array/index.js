// Exercícios de interpretação de código

// Exercício 1
//  a. Será impresso no console os valores dos elementos dos arrays criados, juntamente com o valor do índice
// cada elemento (index) e o array original em si. O maps nesse caso adicionou novas informações a Nova Array.

// Exercício 2
//  a. Será impresso no console o valor de novoArrayB após a função ter mapeado somente os itens do usuário,
// e depois retornado somente o nome dos itens do usuário. 

// Exercício 3
//  a. A nova Array criada pelo filter abriga todos os itens do Array Original e exclui o item que tiver apelido
// diferente de "Chijo"
// Será impresso no console somente a Nova Array com o sobrenome das meninas que são diferentes de Chijo.


// Exercícios de interpretação de código

// Exercício 1
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// //a.
//   const novoArray = pets.map((item, index, array) => {
//    return item.nome
//   })
//   console.log(novoArray)

// b.
//  const novoArray1 = pets.filter((salsichote, salsichinha, array) => { 
//       return  salsichote.raca === "Salsicha"

//     })

//     console.log(novoArray1)

//c.
// const novoArray2 = (descontoPoodle) => {
//     if (descontoPoodle.raca === "Poodle") {
//     console.log (`Você ganhou um cupom de desconto de 10% para tosar o/a ${descontoPoodle.nome}`)
//     }
//   }

//   const poodle = pets.filter(novoArray2)
// console.log(poodle)

// Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// //  a.
// const soNomes = produtos.map((item, index, array) => {
//     return item.nome
// })
// console.log(soNomes)

//b.

// const mostraNomePrecoComDesconto = (item) => {
//     return {
//         nome: item.nome,
//         preco: item.preco * 0.95
//     }
// }

// const retornaDesconto = produtos.map(mostraNomePrecoComDesconto)
// console.log(retornaDesconto)

//c.
const mostraBebidas = (produtos) => {
    return {
        drinks: produtos.categoria
    }
    }

    const retornaBebidas = produtos.filter(mostraBebidas)
    console.log (retornaBebidas)