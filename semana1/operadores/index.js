/* --------------------- Operadores e Lógica da Programação ------------------------

                          Exercícios de Interpretação de códigos

            Exercício 1

a. false -> pois o valor de bool2 é false pois nessa operação && o resultado
seria true somente se as duas variáveis tivessem valor true.

b. false -> o resultado é esse pela mesma questão do resultado anterior. 
A variável bool2 e bool13 são falsas. Para que o resultado fosse true, todas as variáveis teriam que ser true.

c. true -> pois na operação || entre bool1 e bool2 sempre que houver um
verdadeiro, tudo é verdadeiro, mesmo que tenha uma negação "!resultado".

d. boolean -> pois o tipo de operação é booleana por só retornar respostas como verdadeiro ou falso.
As mensagens que serão impressas no console são os resultados das operações lógicas.

 

             Exercício 2 


Primeiramente, percebo que o código tem o prompt para a caixas de Texto sem variáveis declaradas com
o Number. Ou seja, as caixas do prompt com as questões vão aparecer, porém o que será impresso no
console é a junção de dois números vistos como Strings e não como valor numérico.


            Exercício 3

let primeiroNumero1 = Number(prompt("Digite um numero"))
let segundoNumero2 = Number(prompt("Digite um numero"))

const soma = primeiroNumero1 + segundoNumero2

console.log (soma)  Essa seria a solução que eu iria propor: declarar que estamos fazendo a soma
 números e não de Strings.
 
 **************************************************************************************************************************/

//                          Exercícios de Escrita de códigos

//          Exercício 1

const suaIdade = Number(prompt("Qual é sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

const maior =  suaIdade > idadeMelhorAmigo

console.log ("Sua idade é maior do que a de seu melhor amigo?", maior)

//          Exercício 2 

const numeroPar = Number(prompt("Insira um número par"))
const resto = numeroPar % 2

console.log (resto)

// notei o seguinte padrão: todos os números pares chegam ao resultado "0" e todos os números
// ímpares chegam ao resultado "1" 

//           Exercício 3
     const idadeAnos = Number(prompt("Qual a sua idade em anos?"))
     console.log (idadeAnos)

     const idadeMeses = idadeAnos * 12
     console.log (idadeMeses)

     const idadeDias = idadeAnos * 365
     console.log (idadeDias)

     const idadeHoras = idadeAnos * (idadeDias * 24)
     console.log (idadeHoras) 

//           Exercício 4

     const numeroPrimeiro = Number(prompt("Insira um número"))
     const numeroSegundo = Number(prompt("Insira um segundo número"))

    console.log (numeroPrimeiro > numeroSegundo)
    console.log  (numeroPrimeiro === numeroSegundo)
    console.log (numeroPrimeiro % numeroSegundo === 0)
    console.log (numeroSegundo % numeroPrimeiro === 0)