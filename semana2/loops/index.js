//----------------------------- Exercícios de Laços ----------------------------

//                              Interpretação de Código
//  1.
// A variável recebe o valor 0. O for executa o comando: para cada vez que a variável i for a partir de 0 
// e menor que 5, acrescente uma soma de +1 a ela. Depois adiciona-se à primeira variável o valor acrescentado 5+5.
// O resultado impresso no console será 10.

//  2.
//  a. Será impresso no console o número 18.
//  b. Sim, é suficiente.
// NAO CONSEGUI

//  3.
//  a. O resultado no console seria: ** *** ****

//                              Interpretação de Código
//  1. a.
// let quantidadeBichos = Number(prompt("Insira a quantidade em número de bichinhos que você tem:"))
// let respostaComQuantidade = quantidadeBichos
// let comBichinhos = []
// let perguntaSeTemBicho = 0

// if (quantidadeBichos === 0) {
//     console.log("Que peninha, bora adotar um pet, companheiro!")
// } 

//b.

const quantidadeBichos = Number(prompt("Insira a quantidade em número de bichinhos que você tem:"))
let comBichinhos = []
if (quantidadeBichos === 0) {
    console.log("Que peninha, bora adotar um pet, companheiro!")
} 
else {  
    for (let i=0; i< quantidadeBichos; i++) {
    const nomedosPets = prompt('nome')
    comBichinhos.push(nomedosPets)
     }       
    }
console.log(comBichinhos)

// const animais = []
// if( pets === 0 ){
// 	console.log('nao tem animal')
// }
// else {
// 	for( let i=0; i< pets; i++){
// 		const petsNomes = prompt('nome')
// 		animais.push(petsNomes)
// 	}
	
// 	console.log(animais)
