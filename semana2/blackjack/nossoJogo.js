/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// 1.
alert("Bem vindo ao jogo de BlackJack!") // O alert envia uma mensagem para o "usuário"

      
let resposta = (confirm("Quer iniciar uma nova rodada?")) // Armazene uma pergunta ao usuário que recebe as
// opçês de resposta "sim ou não (ok ou cancel)"".
if (resposta === true) { // Se a resposta atribuida pelo usuário for true:
  alert("Vamos iniciar uma nova rodada!") // Envie uma mensagem " " para o usuário. Nesse caso é convidando para a partida".
} else if (resposta === false) { // Se a resposta do usuário for false,
   alert("O jogo acabou!")       // Mande uma mensagem informando o fim do jogo.
}
   
const carta1Usuario = comprarCarta() 
const carta2Usuario = comprarCarta()
const carta1Computador = comprarCarta()
const carta2Computador = comprarCarta() // variáveis com o mesmo valor em branco ( )

let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

    if ( carta1Usuario === "A"){
      carta1Usuario = comprarCarta()
   }else if (carta2Usuario === "A"){
      carta2Usuario = comprarCarta()
   }else if (carta1Computador === "A"){
      carta2Computador === "A"
   }else if (carta2Computador === "A"){
      carta2Computador = comprarCarta()
   }

let maisUmaCarta = ""

   
maisUmaCarta = (confirm(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto}. A carta revelada do computador é ${carta1Computador.texto}. \n Deseja comprar mais uma carta?`))

if (maisUmaCarta === true ) {
      maisUmaCarta = comprarCarta()
   } else if (maisUmaCarta === false){
      maisUmaCarta = !comprarCarta()
   }

pontuacaoUsuario = pontuacaoUsuario + maisUmaCarta.valor


   console.log(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto} ${maisUmaCarta.texto}. Sua pontuação é ${pontuacaoUsuario}. 
As cartas do computador são ${carta1Computador.texto} ${carta2Computador.texto}. 
A pontuação do computador é ${pontuacaoComputador}. `)

      if ( pontuacaoUsuario > 21 && pontuacaoComputador <= 21 ) {
         console.log("O Computador ganhou!")
      } else if (pontuacaoComputador > 21 && pontuacaoUsuario <= 21 ) {
         console.log("O Usuário ganhou!")
      }else if ( pontuacaoComputador > pontuacaoComputador) {
         console.log("O Computador ganhou!")
      }else if ( pontuacaoUsuario > pontuacaoComputador){
         console.log("O Usuário ganhou!")
      }else if ( pontuacaoComputador === pontuacaoUsuario){
         console.log("Empate!")
      }


   