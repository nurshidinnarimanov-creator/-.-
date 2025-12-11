import { percentOf, addPercent } from './mathUtils.js';
import { formatResult } from './formatter.js';

const numInput = document.getElementById('numInput');
const percentInput = document.getElementById('percentInput');
const calcBtn = document.getElementById('calcBtn');
const resetBtn = document.getElementById('resetBtn');
const resultBlock = document.getElementById('results');
const resultPercentEl = document.getElementById('resultPercent');
const resultAddedEl = document.getElementById('resultAdded');

function updateResults() {
  const num = parseFloat(numInput.value);
  const percent = parseFloat(percentInput.value);
  const part = percentOf(num, percent);
  const added = addPercent(num, percent);
  resultPercentEl.innerHTML = `${formatResult(`${percent}% от числа ${num}`, part)}`;
  resultAddedEl.innerHTML = `${formatResult(`${num} + ${percent}%`, added)}`;
  resultBlock.classList.add('show');
}

updateResults();

calcBtn.addEventListener('click', () => {
  updateResults();
  calcBtn.animate(
    [{ transform: 'translateY(0)' }, { transform: 'translateY(-4px)' }, { transform: 'translateY(0)' }],
    { duration: 220, easing: 'ease-out' }
  );
});

resetBtn.addEventListener('click', () => {
  numInput.value = 0;
  percentInput.value = 0;
  updateResults();
});
