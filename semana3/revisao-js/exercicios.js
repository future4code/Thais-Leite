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
  for (let i = 0; i < array.length; i++) { // Estabelece que o contador inicie a função no índice 0 do array,
    // e, desde que esse índice seja menor que o tamanho do array, ele deve adicionar novos números no novo array.
    if (devolveMaior < array[i]) { // Caso o valor de devolve maior for menor que o índice do array,
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
function retornaNNumerosPares(n) { // função para declarar números pares no novo array "n"
  const newArray = []; // variável para guardar o novo array que será realizado
  for (let numero = 0; numerosParess.length < n; numero++) { // Quando a partir do índice zero, o tamanho do número for
    // menor que o tamanho do array inteiro, ele deve adicionar um novo valor à variável.
    if (numero % 2 === 0) { //Se o número for múltiplo de 2,
      newArray.push(numero) // o computador adicionará esse número ao novoArray.
    }
  }
  return newArray // Retorna o novo array com os números pares adicionados.
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
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
