'use strict;'

const html = document.getElementById( 'test-question' ).innerHTML;

  const questionsAnswers = [
  {
    question: '1. Кто открыл Америку?',
    answer1: 'Христофор Колумб',
    answer2: 'Джеймс Кук',
    answer3: 'Виллем Янц'
  },

  {
  question: '2. В каком году было открытие Америки?',
  answer1: '1945',
  answer2: '1492',
  answer3: '1476'
},

{
  question: '3. По предположениям, кто открыл Америку за 70 лет до ее открытия?',
  answer1: 'Китайцы',
  answer2: 'Немцы',
  answer3: 'Индейцы'
},

{
  question: '3. С кем воевала Америка за все годы существования?',
  answer1: 'Куба',
  answer2: 'Ирак',
  answer3: 'Украина'
}
];

localStorage.setItem( 'answerQuestion', JSON.stringify( questionsAnswers ) );

let testBlock = localStorage.getItem( 'answerQuestion' );
    testBlock = JSON.parse( testBlock );

const content = tmpl( html, {
    data: testBlock
  });

document.body.innerHTML = content;

  const right = [ 'Христофор Колумб', '1492', 'Китайцы','Ирак', 'Куба' ],
        returnRight = [],
        TrueBlockQuestion = document.querySelectorAll( 'input' );



const overlay = document.getElementById( 'overlay' ),
      modalForm = document.getElementById( 'modal_form' ),
      passedWindow = document.getElementById( 'passed' ),
      modalClose = document.getElementById( 'modal_close' ),
      notPassed  = document.getElementById( 'not_passed' );

/*Проверка теста и push правильных вариантов в массив*/
button_check.onclick = () => {
  event.preventDefault();
  TrueBlockQuestion.forEach(function (variant) {
    if ( variant.checked) {
      const check = variant.value;
      right.forEach(function (value) {
        if (check === value) {
        returnRight.push( value );
        }
      });
    }
  });

  if ( right.length === returnRight.length ) {//сравниваем длину масивов и выводим модальное окно.+
      overlay.style.display = 'block';
      modalForm.style.cssText = 'display: block; opacity: 1; top: 50%;';
      passedWindow.style.display = 'block';
      modalClose.style.color = '#000';

  } else {
    overlay.style.display = 'block';
    modalForm.style.cssText = 'display: block; opacity: 1; top: 50%;';
    notPassed.style.display = 'block';
  }
};

/*Закрываем модальное окно*/

overlay.onclick = () => {
  modalForm.style.cssText = 'display: none; opacity: 1; top: 0;';
  overlay.style.display = 'none';
  location.reload();
}

modal_close.onclick = () => {
  modalForm.style.cssText = 'display: none; opacity: 1; top: 0;';
  overlay.style.display = 'none';
  location.reload();
}
