const groceryForm = document.getElementById('grocery-form')
const submitFormBtn = groceryForm.querySelector('#submitForm')

const createNewElement = (name, price) => {
  const renderHook = document.getElementById('grocery-list')
  const newElement = document.createElement('div')

  newElement.className = "grocery"
  newElement.innerHTML = `
    <span class="name">${name}</span>
    <span class="price">R$${price}</span>
    <button id="delete-grocery-btn"><i class="fas fa-trash"></i></button>
  `
  const deleteElBtn = newElement.querySelector('#delete-grocery-btn')

  deleteElBtn.addEventListener('click', () => {
    const parentEl = deleteElBtn.parentElement
    renderHook.removeChild(parentEl)
  })

  return newElement
}

const validateForm = () => {
  const name = document.getElementById('grocery-name').value
  const price = document.getElementById('grocery-price').value

  if (!name.trim() || !price.trim()) {
    alert(`Digite algo para adicionar à sua lista!`)
  } else {
    return [name, price]
  }
}

const render = () => {
  const renderHook = document.getElementById('grocery-list')
  const validatedData = validateForm()

  if (!validatedData) {
    console.warn('No data submited')
  } else {
    const [name, price] = validatedData
    const el = createNewElement(name, price)
    renderHook.append(el)
  }
}


submitFormBtn.addEventListener('click', render)