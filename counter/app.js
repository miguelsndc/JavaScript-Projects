const COUNT_DEFAULT_VALUE = 0;
let currentCountValue = COUNT_DEFAULT_VALUE;

const addCountBtn = document.getElementById('addCountBtn');
const lowerCountBtn = document.getElementById('lowerCountBtn');
const count = document.getElementById('count');

count.innerHTML = COUNT_DEFAULT_VALUE;

const checkCountValue = value => {
  if (value === 0) {
    count.style.color = 'gray';
  }
  else if (value > 0) {
    count.style.color = 'green';
  }
  else {
    count.style.color = 'red';
  }
}

const increaseCountHandler = () => {
  currentCountValue++;
  checkCountValue(currentCountValue);
  count.innerHTML = currentCountValue;
}

const decreaseCountHandler = () => {
  currentCountValue--
  checkCountValue(currentCountValue);
  count.innerHTML = currentCountValue;
}

addCountBtn.addEventListener('click', increaseCountHandler);
lowerCountBtn.addEventListener('click', decreaseCountHandler);