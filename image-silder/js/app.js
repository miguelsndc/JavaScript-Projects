const nextImgButton = document.getElementById('nextImgButton');
const prevImgButton = document.getElementById('prevImgButton');
const imageContainer = document.getElementById('img-container');

const images = [
  'iphone',
  'samsung',
  'xiaomi'
]

let counter = 0;
imageContainer.style.background = `url(./images/${images[counter]}.jpg) center no-repeat `;

const checkCounter = counter => {
  if (counter > images.length - 1) {
    counter = 0;
    return counter;
  }
  else if (counter < 0) {
    counter = images.length - 1;
    return counter;
  }
  else {
    return counter;
  }
}

const slideToPrevImg = () => {
  counter--;
  counter = checkCounter(counter);
  console.log(counter);
  imageContainer.style.background = `url(./images/${images[counter]}.jpg) center no-repeat `;
}

const slideToNextImg = () => {
  counter++;;
  counter = checkCounter(counter);
  console.log(counter);
  imageContainer.style.background = `url(./images/${images[counter]}.jpg) center no-repeat `;
}

prevImgButton.addEventListener('click', slideToPrevImg);
nextImgButton.addEventListener('click', slideToNextImg);