'use strict';

const MIN_VALUE = -10;
const MAX_VALUE = 10;
let count = 0;

const result = document.getElementById('result');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const notice = document.getElementById('notice');

function render() {
  result.textContent = String(count);
  result.classList.toggle('positive', count > 0);
  result.classList.toggle('negative', count < 0);

  plusButton.disabled = count === MAX_VALUE;
  minusButton.disabled = count === MIN_VALUE;
  notice.textContent = (count === MAX_VALUE || count === MIN_VALUE)
    ? 'Вы достигли экстремального значения'
    : '';
}

plusButton.addEventListener('click', () => {
  if (count < MAX_VALUE) {
    count += 1;
    render();
  }
});

minusButton.addEventListener('click', () => {
  if (count > MIN_VALUE) {
    count -= 1;
    render();
  }
});

render();
