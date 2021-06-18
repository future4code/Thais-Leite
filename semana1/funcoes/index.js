// ------------------------- Aula 06: Funções ------------------

//          Exercícios de Interpretação de Código

//      Exercício 1
//  a. Vai ser impresso no Console: 10 50. Isso porque o return devolve o resultado do valor da função, que
//  pode ser usada posteriormente para outras contas, que foram: 5 * 2 e 5 * 10.
//
//  b. Ao tirar os dois console.log, aparecerá no Console um erro (Live reload enabled.). Isso porque nada
// foi enviado para o console imprimir.

//      Exercício 2
//  a. Primeiro, o prompt colhe um texto do usuário, depois a função recebe o parâmetro "texto" e pede 
// para retornar um texto em lower case e com o "includes()", ele determina que se a string tiver
// a palavra "cenoura" é true, se não é false.
// 
//  b. "Eu gosto de cenoura" = true
//  "CENOURA é bom pra vista" = true
// "Cenouras crescem na terra" = true porque contém a string 'cenoura'

//          Exercícios de Escrita de Código

//      Exercício 1

/* a. 

function imprimirDadosSobreMim ( ) {
console.log("Eu sou Thais, tenho 23 anos, moro em São Paulo e sou estudante")
}
imprimirDadosSobreMim ( )

// b. 
const meuNome = "Thais"
const minhaIdade = "25"
const minhaCidade = "São Paulo"
const minhaProfissao = "Estudante"

    function imprimeDadosPessoais(nome, idade, cidade, profissao) {

    const meusDados = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    return meusDados 
    }
    const resultado = imprimeDadosPessoais(meuNome, minhaIdade, minhaCidade, minhaProfissao)
     console.log(resultado)


//      Exercício 2 
// a. 
/*function somaDoisNumeros(numeroUm, numeroDois) {
const somaDosNumeros = numeroUm + numeroDois
return somaDosNumeros
}

const numerosSomados = somaDoisNumeros(5, 7)
console.log(somaDoisNumeros(5, 7))


//b. 

function recebeDoisNumeros (firstNumber, secondNumber){
const comparaDoisNumeros = firstNumber >= secondNumber
return comparaDoisNumeros 
}

const comparacaoDosNumeros = recebeDoisNumeros(3, 8)
console.log(recebeDoisNumeros(3, 8)) 

//c. 

function parOuImpar (numberOne){
const parImp = numberOne % 2 === 0
return parImp
}

const imParPar = parOuImpar (8)
console.log(parOuImpar (8))

//d.
const recebeMensagem = function(texto) {
	return texto.toUpperCase()    }
const avaliaMensagem = recebeMensagem ("Bora almoçar?")

console.log(recebeMensagem)

e.*/
