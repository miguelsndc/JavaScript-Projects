// <li class="grocery-item">
// <h4 class="name">Grocery Name</h3>
// <button class="remove-item"><i class="fas fa-trash"></i></button>
// </li>

const form = document.getElementById("grocery-form");
const renderHook = document.querySelector(".grocery-list");
const localStorage = window.localStorage;

const validateFormData = () => {
  const textInput = form.firstElementChild.value;

  if (!textInput.trim()) {
    alert("Digite algo na Caixa de texto !");
    return false;
  } else {
    return textInput;
  }
};

const createNewLiElement = (name) => {
  const newLi = document.createElement("li");
  newLi.className = "grocery-item";
  newLi.innerHTML = `
    <h4 class="name">${name}</h3>
    <button class="remove-item"><i class="fas fa-trash"></i></button>
  `;
  const deleteParentElBtn = newLi.querySelector(".remove-item");

  deleteParentElBtn.addEventListener("click", () => {
    renderHook.removeChild(deleteParentElBtn.parentElement);
  });
  return newLi;
};

const render = () => {
  const newItemName = validateFormData();
  if (!newItemName) {
    console.log("No input");
  } else {
    const newLiEl = createNewLiElement(newItemName);
    renderHook.append(newLiEl);
  }
};

form.addEventListener("submit", render);
