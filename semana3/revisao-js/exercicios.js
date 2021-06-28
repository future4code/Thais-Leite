// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = [];
  for(let i = array.length - 1; i >= 0; i-- ) {
      arrayInvertido.push(array[i]) // Coloquei esse "array[i] porque sei que funciona, mas não entendi porque 
      //da um push em arra[i] e não do contador, se é a partir dele que que é chamado o contador"
    }
  return arrayInvertido
  }

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) { // O pc criou a função com o nome e recebe um parâmetro de Array
  let novoArray = []; // Cria um novo array vazio para receber os novos valores
	for(let i = 0; i < array.length; i++) { // o contador inicia o cálculo no índice 0, a condição é que esse número
    //seja maior que o tamanho da Array, e o incremento é adicionar +1 ao tamanho do array, cada vez que o código for
    // verdadeiro nessas primeiras condições.
		if(array[i] % 2 === 0) { // Se o índice do array for positivo,
      novoArray.push(array[i] * array[i]) // o computador deve multiplicar o primeiro índice com o sgundo no 
      //novo array
    }
  }
	return novoArray // retorna o novo array
}


// EXERCÍCIO 03
function retornaNumerosPares(array) { // Cria-se a função que recebe como parâmetro um array já estabelecido.
  let arrayPares = []; // Cria uma nova variável com array vazio para receber novos valores
  for (let i = 0; i < array.length; i++){ // Estabelece que o contador inicia o cálculo no 0 e define que a condição de
    // execução dessa função é que o contador deve ser menor que o tamanho do array. O incremento é adicionar novos
    // números no novo array, que estejam dentro das condições estabelecidas.
    if (array [i] % 2 === 0) // Caso tenha passado nas condições anteriores E for POSITIVO
  arrayPares.push(array[i]) // Será adicionado ao novo Array somente os números pares.
  }
  return arrayPares // retorna o novo Array
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

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
