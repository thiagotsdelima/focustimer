// aqui fiz a logica para a troca de cor toda vez que aperta o botao
let darkMode = true;
const buttontoggle = document.getElementById('toggle-mode');
buttontoggle.addEventListener('click', (event) => {
  // nesse caso e o seguinte: ele procura no HTML, se tiver o light, tira; se não tiver, adiciona
  document.documentElement.classList.toggle('light');

  // se o lite mode é verdadeiro, ele vai ser light; se não, dark
  const mode = darkMode ? 'light' : 'dark';
  
  // currentTarget é o botão, vamos pegar o span que tem a função de ativar ou desativar
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;

  /* ! é o contrário do valor atual. Quando faço !darkMode, estou negando ele, dizendo que ele é false. 
  Isso atribui para o darkMode, e essa é a lógica para que você possa apertar o botão e toda vez ele mudar de estado.
  Nesse caso, ele fica trocando de estado toda vez que aperta o botão */
  darkMode = !darkMode;
});
