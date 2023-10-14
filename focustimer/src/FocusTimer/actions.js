// aqui importo o modulo sem ele nao existe conecao com as pastas
import state from './state.js'

// aqui export para fazer o countdown
import * as timer from './timer.js'
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

// com essa fucao ele aceita que clice no play, se quiser ver o resultadpo e so executar export com esse fucao: console.log('toggleRunning Function') aqui faz a fucao de tomada, toda vez que clica ele muda de true para false e assim por diante: state.isRunning =! state.isRunning abaixo faz a mesama coisa com outro jeito
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  
  timer.countdown() // com import e essa fucao quando clicar em play roda aplicacao, faz uma acao
  sounds.buttonPressAudio.play() // e para quando aperta o play ele sair um som
}

// O reset vai remover a class rum, aqui quando eu der o stop ele faz o reset inteiro da aplicacao
export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay() // aqui faz update no display

  sounds.buttonPressAudio.play() // som
}

// com essa fucao ele aceita que clice no play e no set(set e o cronometro, esta definido assim na hmtl), quiser ver o resultado e so fazer console.log('set')
export function set() {
  // aqui quando eu clicar na imagem do cronometro, ele vai fazer eu altera o numero
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()

}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  // e para tocar aonde tem uma alto falante, sair uma musica clicar comerca clicar termina
  if(state.isMute) {
    sounds.bgaudio.play()
    return
  }

  sounds.bgaudio.pause()
}


