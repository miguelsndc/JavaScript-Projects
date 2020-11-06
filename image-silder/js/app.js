const nextImgButton = document.getElementById('nextImgButton');
const prevImgButton = document.getElementById('prevImgButton');
const imageContainer = document.getElementById('img-container');
let counter = 0;

const images = [
  'cam1',
  'cam2',
  'cam3',
]

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

const slideImages = (param) => {
  if (param === "next") {
    counter++
  } else {
    counter--
  }
  counter = checkCounter(counter);
  console.log(counter);
  imageContainer.style.background = `url(./images/${images[counter]}.jpg) center no-repeat `;
}

const slideToPrevImg = () => {
  slideImages("prev")
}

const slideToNextImg = () => {
  slideImages('next')
}

prevImgButton.addEventListener('click', slideToPrevImg);
nextImgButton.addEventListener('click', slideToNextImg);