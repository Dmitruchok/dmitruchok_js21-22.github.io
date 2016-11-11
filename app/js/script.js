'use strict';

  let html = document.getElementById('#test-question').html();
  console.log(html);

  let questionsAnswers = [{
    question: '1. Кто открыл Америку?',
    answer1: 'Христофор Колумб',
    answer2: 'Джеймс Кук',
    answer3: 'Виллем Янц'
  }, {
    question: '2. В каком году было открытие Америки?',
    answer1: '1945',
    answer2: '1492',
    answer3: '1476'
  }, {
    question: '3. По предположениям, кто открыл Америку за 70 лет до ее открытия?',
    answer1: 'Китайцы',
    answer2: 'Немцы',
    answer3: 'Индейцы'
  }, {
    question: '3. С кем воевала Америка за все годы существования?',
    answer1: 'Куба',
    answer2: 'Ирак',
    answer3: 'Украина'
  }];

  localStorage.setItem('answerQuestion', JSON.stringify(questionsAnswers));

  var $testBlock = localStorage.getItem('answerQuestion');
  $testBlock = JSON.parse($testBlock);

  var content = tmpl($html, {
    data: $testBlock
  });
  $('body').append(content);

  var $right = ['Христофор Колумб', '1492', 'Китайцы', 'Ирак', 'Куба'],
      $returnRight = [],
      $TrueBlockQuestion = $('input');

  /*Проверка теста и push правильных вариантов в массив*/
  $('#button-check').on('click', function () {
    event.preventDefault();
    for (var i = 0; i < $TrueBlockQuestion.length; i++) {
      if ($($TrueBlockQuestion[i]).prop('checked')) {
        var valueText = $($TrueBlockQuestion[i]).context.value;
        for (var j = 0; j < $right.length; j++) {
          if (valueText === $right[j]) {
            $returnRight.push($right[j]);
          }
        }
      }
    }
    if ($right.length === $returnRight.length) {
      //сравниваем длину масивов и выводим модальное окно.
      $('#overlay').fadeIn(500, function () {
        $('#modal_form').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
        $('#passed').css('display', 'block');
        $('#modal_close').css({
          'color': '#000'
        });
      });
    } else {
      $('#overlay').fadeIn(500, function () {
        $('#modal_form').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
        $('#not_passed').css('display', 'block');
      });
    }
  });

  /*Закрываем модальное окно*/
  $('#modal_close, #overlay').click(function () {
    $('#modal_form').animate({ opacity: 1, top: '0' }, 300, function () {
      $(this).css('display', 'none');
      $('#overlay').fadeOut(500);
      location.reload();
    });
  });
});
