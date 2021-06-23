//                                 Aula Condicionais

// *********************** Exercícios de Interpretação de Códidos ****************************

// EXERCÍCIO 1
// a. O código recebe um valor do usuário e guarda ele numa variável respostaDoUsuario, em seguida ele
// torna esse valor em uma variável com valor Number. Depois executa uma condição: se o número
// inserido for par, o console.log irá imprimir "Passou no teste", se não imprimirá "Não passou no teste"

// b. Ele imprime no console "Passou no teste" se o número inserido no prompt for par.

// c. A mensagem é "Não passou no teste" para números ímpares.

// EXERCÍCIO 2
// a. O código serve para recolher do usuário uma fruta pelo prompt, estabelecer o valor de cada fruta
// e mostrar seu preço. Executa a condição seguinte: de acordo com cada fruta, um valor é mostrado
// no console.

// b. A mensagem impressa no console, se o valor de fruta for "Maçã" será: "O preço da fruta Maçã é R$ 2.25".

// c. Se eu retiro o break, a execução do código não vai sair, e o valor de "Pêra" não será mais 5.5,
// será o valor de default (R$5), pois o default roda o código que não combinou com a case. A mensagem
// impressa pelo console será "O preço da fruta Pêra é R$ 5"

// EXERCÍCIO 3
// a. A primeira linha é uma variável que guarda um Number vindo do prompt. Se o número inserido for maior que 0

// b) Se o usuário digitasse o número 10, a mensagem impressa no console seria "Esse número passou no teste"
// pois o número é maior que 0. Se o número fosse -10 , o console imprimiria "mensagem is not defined".

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// O número é retirado do prompt, e depois passa pela condicional if, que se é verdadeira imprime a mensagem
// de que passou no teste. Essa impressão no console deve ser solicitada dentro do bloco de cada condição.
// Se a mensagem fica para fora, ela não é definida.

// ************************** Exercícios de Escrita de Códidos *******************************
// EXERCÍCIO 1
const idadeUsuario = prompt("Insira sua idade:")
const idadeNumero = Number(idadeUsuario)

if (idadeNumero >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log ("Você não pode dirigir")

}

// EXERCÍCIO 2
let turmaManha = prompt("Digite M se for da turma da manhã e N se for da turma noturna e V se for da turma da tarde:")
let manhaOuNoite = turmaManha
if(turmaManha === "M")  {
  console.log('Bom dia!')
} else if (turmaManha === "N") {
  console.log('Boa noite!')
} else if(turmaManha === "V") {
  console.log('Boa tarde')
} else {
  }

//EXERCÍCIO 3

const saberTurma = prompt("Digite M se for da turma da manhã e N se for da turma noturna e V se for da turma da tarde:")
const valorTurma = saberTurma
switch(saberTurma) {
  case 'M':
    console.log('Bom dia!')
    break
  case 'N':
    console.log('Boa noite!')
    break
  case 'V':
    console.log('Boa tarde!')
    break
    default:
    console.log('Digite uma letra válida!')
}

// EXERCÍCIO 4

const qualGenero = prompt("Qual gênero de filme vamos assistir?")
const valorIngresso = Number(prompt("Qual o preço do ingresso?"))


if (qualGenero === "Fantasia" && valorIngresso === 15)  {
      console.log('Bom filme!')
} else {       console.log('Escolha outro filme :(')    
}

