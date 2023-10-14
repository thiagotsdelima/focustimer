import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js";
import state from "./state.js";

// estou capturando qualquer click na minha pagina, estou verificando se ao eu clicar aqui, no caso na pagina ele vai procurar na pasta de actions ver se tem a fucao ou seja se a acao exite, se tem retorno da pasta actions
export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    // nesse caso quando comerca a aplicacao, se eu clica em outro canto que nao seja no play ele ja para a execucao
    if(typeof actions[action] != "function") { 
      return
    }

    actions[action] () // aqui e onde se a fucao exieste executa
  });
}


export function setMinutes() {
// aqui quando ele estiver em focus ele vai executar uma fucao
el.minutes.addEventListener('focus', () => {
  el.minutes.textContent = ""; // limpar o cronometro
})

// aqui e para que quando vc for modificar os numeros no cronometro ele nao possa digitar letras, essa fucao /\d/.test() e para ver os cartecters uma a um, ele ler um por um na aplicacao, entao semrpe que ele ver que e um numero ele retorna falso
el.minutes.onkeypress = () => /\d/.test(event.key)

// aqui nao deixa o numero passar de 60
el.minutes.addEventListener('blur', (event) => {
  let time = event.currentTarget.textContent
  time = time > 60 ? 60 : time

  state.minutes = time
  state.seconds = 0

  updateDisplay()
  el.minutes.removeAttribute('contenteditable')

})
}








/* target sginifica alvo, aonde meu mause estiver clicando, aonde o mause clico(console.log(event.target); e so fazer isso e depois ver o nome de cada elemento na pagina como ele e chamado, no codigo
export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(action === undefined) {
      return
    }

    console.log(actions.toggleRunning)
  });
}
  acima estou capturando todos os eventos de click e vendo qual deles sao acoes que agente quer os que nao sao ja para no if e se nao for pro if  */