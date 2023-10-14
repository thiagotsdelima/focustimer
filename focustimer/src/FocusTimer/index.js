import state from "./state.js";
import * as events from './events.js';
import * as timer from './timer.js';

// Aqui, você está exportando a função 'start' para que possa ser chamada em outros lugares.
export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;
  timer.updateDisplay(minutes, seconds); // Você deve passar os minutos e segundos para a função 'updateDisplay'
  events.registerControls();
  events.setMinutes();
}