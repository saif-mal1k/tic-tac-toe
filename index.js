/*global getWinner */
window.addEventListener('load', function handler() {
  'use strict';

  var button = document.querySelector('.startNewGame');
  var table = document.querySelector('.field');
  var cells = document.querySelectorAll('.cell');
  var message = document.querySelector('.winner-message');
  var previous;
  var counter;

  function final(info) {
    message.innerHTML = info;
    table.removeEventListener('click', fill, true);
    counter = 0;
  }

  function fill(e) {
    var target = e.target;
    if (target.classList.contains('cell') && !target.classList.contains('o') && !target.classList.contains('x')) {
      if (previous === 'o') {
        target.classList.add('o');
        previous = 'x';
      } else {
        target.classList.add('x');
        previous = 'o';
      }
      counter++;
      if (counter > 4) {
        switch (getWinner()) {
          case 'x':
            final('X wins!');
            break;
          case 'o':
            final('O wins!');
            break;
          default :
            break;
        }
      }
      if (counter > 8 && getWinner() === undefined) {
        final('Ничья');
      }
    }
  }

  function clear() {
    var i;
    for (i = 0; i < cells.length; i++) {
      cells[i].classList.remove('o', 'x');
    }
    message.innerHTML = '';
    table.addEventListener('click', fill, true);
    previous = 'x';
    counter = 0;
  }
  button.addEventListener('click', clear);
});
