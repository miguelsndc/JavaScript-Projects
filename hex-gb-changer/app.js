const btnBgChanger = document.getElementById("btn")
const body = document.body
const hexColors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
let hexColor = "#"

const hexBgChanger = () => {
  for (let i = 0; i < 6; i++) {
    let rndHexValue = hexColors[Math.floor(Math.random() * hexColors.length)]
    hexColor += rndHexValue
  }
  console.log(hexColor)
  body.style.backgroundColor = hexColor
  hexColor = "#"
}

btnBgChanger.addEventListener('click', hexBgChanger)  