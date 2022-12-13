const textHeader = document.querySelector('.p-header');
const portuguese = document.querySelector('.portuguese');
const english = document.querySelector('.english');
const textMain = document.querySelector('.p-section-main');
const buttonCreate = document.querySelector('.button-createList');
const textFooter = document.querySelector('.p-footer');
const textFooterAnchor = 'DESENVOLVIDO POR <a href="https://www.linkedin.com/in/rom%C3%A1rio-oliveira-b9022a1b7/" target="_blank">R.OlIVEIRA</a>'

portuguese.addEventListener('click', changePortuguese);
english.addEventListener('click', changeEnglish);


function changePortuguese(){
  textHeader.textContent = "ESCOLHA O IDIOMA";
  buttonCreate.textContent = "CRIAR LISTA";
  textMain.textContent = "Crie listas de tudo que você tem a fazer, otimize seu tempo e organize seu dia."
  textFooter.textContent = "DESENVOLVIDO POR R.OlIVEIRA."
}

function changeEnglish(){
  textHeader.textContent = "CHOOSE LANGUAGE";
  buttonCreate.textContent = "CREATE LIST";
  textMain.textContent = "Create lists of everything you have to do, optimize your time, and organize your day."
  textFooter.textContent = "DEVELOPED BY R.OLIVEIRA."
}

