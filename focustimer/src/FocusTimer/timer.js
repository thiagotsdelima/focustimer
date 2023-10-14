import state from "./state.js"
import * as el from "./elements.js"
import { reset } from './actions.js'
import { KitchenTimer } from './sounds.js'

// Aqui junto com actions.js fazemos a fucao de execucao, quer dizer que quando aperta play a app vai roda
export function countdown() {
  // nesse caso junto com a pasta state.js com countdownId: null e com state.countdownId = setTimeout(() => countdown(), 1000) e com state.countdownId = essa parte e essa fucao aqui ele sempre limpa quando iniciu e parou pois se nao ele fica aumentando a velocidade dos numeros enao fuciona direito, sempre que para ele zera
  clearTimeout(state.countdownId)
  // Aqui e para, para de fazer o countdown, nesse caso quando vc clica, fica executando quantas vezes vc clicar. com essa fucao encerra o countdown
  // verifica se o running nesse caso estar em playr em execucao, se for falso ele para a aplicacao com return. entao quando aqui quando vc aperta play roda e quando vc aperta pause ele muda de estado e para no return
  if(!state.isRunning) { 
    return
  }
 
  // aqui tranformo em numero, os elementos, aqui ele faz a fucao de pegar os numeros, que na verdade e text, mas tranformamos em numeros com esse duas linhas
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)


  // quando transfomor em numeros, posso entao fazer essa fucao de descrementar, quando eu clicar quero que tire um segundo(imendiatamente ele tira 1 segundo)
  seconds--

  // aqui ele ver se os segundos esta menor que zero, se estiver ele volta para 59, isso o conomtro
  if(seconds < 0) {
    seconds = 59
    minutes--; // agora vou decrementar os minustus
  }

  // agora vamos observa se o minito e menor que zero
  if(minutes < 0) {
    reset() // aqui ao inves dele atualizar o display com essa fucao updateDisplay(minutes, seconds) ele resta fazendo reniciar o cronometro
    KitchenTimer.play() // quando zera ele emite um so sozinho
    return
  }

  // aqui chama a fucao, pos sem essa linha nao consigo executar na web. ele chama a fucao:export function updateDisplay(minutes, seconds) {}
  updateDisplay(minutes, seconds)


  // recursao, e quando eu coloco para executar a fucao, ela mesmo no mesmo momento. 1000 sginifica 1 segundo(toda recursao tem que ter o momento de parada: return)
  state.countdownId = setTimeout(() => countdown(), 1000)

}




// aqui e onde o codigo e executado, o a fucao em sir criada atualizar o cronometro, fazer ele rodada na aplicacao
export function updateDisplay(minutes, seconds) {
  // aqui ele ver que nao tem nada rodando entao ele com essa fucao: minutes = minutes ?? state.minutes ele pega do estado da aplicao
minutes = minutes ?? state.minutes
seconds = seconds ?? state.seconds
// aqui ele atualizar, entao fiz String para que prenchas os dois 00:00 faco: String(minutes).padStart(2, "0") aqui ele falar 2 casa decimais e prencha com 0
el.minutes.textContent = String(minutes).padStart(2, "0")
el.seconds.textContent = String(seconds).padStart(2, "0")
}