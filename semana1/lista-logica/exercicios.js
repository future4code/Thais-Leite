// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
  
  function calculaAreaRetangulo() {
    const n1 = Number(prompt("Digite a altura do retângulo."))
    const n2 = Number(prompt("Digite a largura do retângulo."))
    const area = n1 * n2
    console.log(area) 
}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = Number(prompt("Qual o ano Atual?"))
const AnoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
const resultado1 = anoAtual - AnoNascimento
console.log(resultado1)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const pesoUsuario = Number(prompt("Insira seu peso em kg."))
  const alturaUsuario = Number(prompt("Insria sua altura em centímetros."))
  const calculaIMC = (pesoUsuario / (alturaUsuario * alturaUsuario))
  return calculaIMC
}
    //Depois que percebi que esse exercício não pedia o peso e altura pelo prompt. O correto seria:
  // function calculaIMC(peso,altura){
  // return peso / (altura*altura)
  // }
  //calculaIMC (85, 1.8)


// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Insira seu nome:")
  const idadeUsuario = prompt("Insira sua idade:")
  const emailUsuario = prompt("Agora, digite seu e-mail:")
  const respostaAoUsuario = `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
  console.log(respostaAoUsuario)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavorita1 = prompt("Insira sua cor favorita aqui:")
  const corFavorita2 = prompt("Insira sua segunda cor favorita:")
  const corFavorita3 = prompt("Por fim, insira sua terceira cor favorita:")
const tresCoresFavoritas = [corFavorita1, corFavorita2, corFavorita3]
console.log(tresCoresFavoritas)
  }

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
retornaStringEmMaiuscula ("feliz de ver você aqui")
  

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 return custo / valorIngresso
  }
   calculaIngressosEspetaculo (3000, 100)
   

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
return string1.length === string2.length

  }
  checaStringMesmoTamanho ("bola", "dado")


// EXERCÍCIO 09 
function retornaPrimeiroElemento(array) {
  return array[0]
  }
retornaPrimeiroElemento ("bananinha")


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    return array.pop()
  }
  retornaUltimoElemento([4,5,6])
  
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const temp = array [0]
  array [0] = array[array.length -1]
  array [array.length - 1] = temp
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}
checaIgualdadeDesconsiderandoCase("Olá", "tudo bem?")

// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = Number(prompt("Insira aqui o ano atual:"))
  const anoNasc = Number(prompt("Insira aqui o ano do seu nascimento:"))
  const anoIdd = Number(prompt("Insira aqui o ano em que sua Carteira de Identidade foi emitida:"))

  const idadePessoa = anoAtual - anoNasc
  const renovacao1 = anoAtual - anoIdd
  const criterioUm = (idadePessoa <= 20 && renovacao1 >= 5)
  const criterioDois = (20 < idadePessoa && idadePessoa <= 50 && renovacao1 >= 10)
  const criterioTres = (idadePessoa > 50 && renovacao1 > 15)
  const devoRenovar = (criterioUm || criterioDois || criterioTres)
  console.log(devoRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maisDe18 = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui o ensino médio completo?")
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
    const condicoes = maisDe18 === "sim" && ensinoMedio === "sim" && disponibilidadeHorario === "sim"
    console.log(condicoes)
}
