const operators = Array.from(document.querySelectorAll('.operator'))
const numbers = Array.from(document.querySelectorAll('.number'))
const resultWrapper = document.querySelector('.result')
const resultTrigger = document.querySelector('.result-trigger')
const cleanResults = document.querySelector('.clean-content')

const calculate = expression => {
  let result = eval(expression)
  if (result === Infinity) {
    result = 0
  }
  return result
}

operators.forEach(operator => {
  operator.addEventListener('click', () => { resultWrapper.textContent += operator.dataset.op })
});


numbers.forEach(number => {
  number.addEventListener('click', () => { resultWrapper.textContent += number.dataset.num })
})


resultTrigger.addEventListener('click', () => {
  resultWrapper.textContent = calculate(resultWrapper.textContent)
})

cleanResults.addEventListener('click', () => { resultWrapper.textContent = "" })