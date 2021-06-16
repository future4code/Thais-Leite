// ----------------------->EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<-------------------------------

// ----------------------->EXERCÍCIO 1<----------------------------
/*let array
console.log('a. ', array) 

array = null
console.log('b. ', array)  

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) 


let i = 0
console.log('d. ', array[i]) 

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

// "a. undefined" pois a array não teve nenhum valor atribuído a ela.
// "b. null" pois a array está classificada como null.
// "c. 11" pois a propriedade length nos diz quantos elementos há no array.
// "d. 3" pois ao utilizar array[0], o pc identifica o primeiro elemento da array.
// "e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]" pois ele trocou o índice 1 (n. 4 da lista) por 19 
// e depois declarou toda a array."

// ----------------------->EXERCÍCIO 2<----------------------------

// O valor impresso será "SUBI EM UM ÔNIBUS EM MARROCOS + tamanho de caracteres da frase ",
//incluindo os espaços.*/

// ----------------------->EXERCÍCIOS DE ESCRITA DE CÓDIGO<-------------------------------

// ----------------------->EXERCÍCIO 1<----------------------------

const nomeUsuario = prompt("Qual seu nome?")
const emailUsuario = prompt("Qual é seu e-mail?")

console.log (`O e-mail ${emailUsuario}, foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)


// ----------------------->EXERCÍCIO 2<----------------------------

let comidasPreferidas = ["bolo", "pipoca", "yakult", "coca", "chocolate"]

console.log(comidasPreferidas) 
 
console.log(`Essas são minha comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}
`)

let comidaUsuario = prompt("Qual sua comida preferida?")

comidasPreferidas = comidaUsuario.push 
console.log(comidasPreferidas[1]) 


// ----------------------->EXERCÍCIO 3<----------------------------

let listaDeTarefas = []

let tarefaUm = prompt("Digite a primeira tarefa que você precisa fazer hoje:")

let tarefaDois = prompt("Digite a segunda tarefa que você precisa fazer hoje:")

let tarefaTres = prompt("Digite a terceira tarefa que precisa realizar hoje:")

listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]

console.log(listaDeTarefas)


let indiceUsuario = prompt("Insira o índice da tarefa já realizada: 0 , 1 ou 2 ")

listaDeTarefas.splice(indiceUsuario)
console.log(listaDeTarefas)



// ----------------------->EXERCÍCIO 4<----------------------------