// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]) // Coloquei esse "array[i] porque sei que funciona, mas não entendi porque 
    //da um push em arra[i] e não do contador, se é a partir dele que que é chamado o contador"
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) { // O pc criou a função para retornar os números pares do array
  let novoArray = []; // Cria um novo array vazio para receber os novos valores
  for (let i = 0; i < array.length; i++) { // o contador inicia o cálculo no índice 0, a condição é que esse número
    //seja maior que o tamanho da Array, e o incremento é adicionar +1 ao tamanho do array, cada vez que o código for
    // verdadeiro nessas primeiras condições.
    if (array[i] % 2 === 0) { // Se o índice do array for positivo,
      novoArray.push(array[i] * array[i]) // o computador deve multiplicar o primeiro índice com o sgundo no 
      //novo array
    }
  }
  return novoArray // retorna o novo array
}

// EXERCÍCIO 03
function retornaNumerosPares(array) { // Cria-se a função para retornar números pares do array
  let arrayPares = []; // Cria uma nova variável com array vazio para receber novos valores
  for (let i = 0; i < array.length; i++) { // Estabelece que o contador inicia o cálculo no 0 e define que a condição de
    // execução dessa função é que o contador deve ser menor que o tamanho do array. O incremento é adicionar novos
    // números no novo array, que estejam dentro das condições estabelecidas.
    if (array[i] % 2 === 0) // Caso tenha passado nas condições anteriores E for POSITIVO
      arrayPares.push(array[i]) // Será adicionado ao novo Array somente os números pares.
  }
  return arrayPares // retorna o novo Array
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) { //Cria uma função para retornar maior número do Array, parâmetros já prontos
  let devolveMaior = array[0]; // Cria uma nova variável com o primeiro elemento do array 
  for (let i = 0; i < array.length; i++) { // Estabelece que o contador inicie a função aceitando valores a partir
    // de zero e, desde que esse valor seja menor que o tamanho do array, ele será acrescido novo array.
    if (devolveMaior < array[i]) { // SOMENTE SE o valor de devolve maior for menor que o índice do array,
      devolveMaior = array[i] // o computador deve atribuir ao devolve maior o valor de array com os índices já inseridos
    }
  }
  return devolveMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) { // função para adicionar números pares em um novo Array, com parâmetro numero.
  const arrayPares = []; // Nova variável para guardar no novo array que será incrementado.
  for (let number = 0; arrayPares.length < n; number++) { // Quando a partir do valor zero, o tamanho do array for
    // menor que o tamanho do array inteiro, ele terá um novo valor acrescido:
    if (number % 2 === 0) { //SOMENTE SE o número for múltiplo de 2,
      arrayPares.push(number) // o computador adicionará esses números ao novoArray.
    }
  }
  return arrayPares // Retorna o novo array com os números pares adicionados.
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) { // função com parâmetros já estabelecidos (lado a, lado b, lado c)
  if (a !== b && b !== c) { // Se todos os lados forem diferentes
    return 'Escaleno' // retorne Escaleno
  } else if (a === b && b === c) { // Se todos os lados forem iguais
    return 'Equilátero' // retorne Equilatero
  } else { // se não for nenhuma das condições acima:
    return 'Isósceles' // retorne Isósceles
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) { // função com parâmetro de dois números a serem declarados
  let maiorNumero // variável para estabelecer o maior número
  let menorNumero // variável para estabelecer o menor número
  let maiorDivisivelPorMenor // variável para armazenar a divisão dos números anteriores

  if (num1 > num2) { // se o primeiro for maior que o segundo,
    maiorNumero = num1 //o maior Numero será o num1
    menorNumero = num2 // e o menor número será o num2

  } else { // caso contrário

    maiorNumero = num2 // o maior número será o num2
    menorNumero = num1 // e o menor será o num1
  }
  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0 // checa diferenca com num. positivo
 const diferenca = maiorNumero - menorNumero // armazena valor da diferença
  return { // retorna em Objeto os elementos pedidos
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
}


// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
