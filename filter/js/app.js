const submitFilterInput = document.getElementById('submitFilterInput');
const boxElements = Array.from(document.querySelectorAll('.box'));
const filterButtons = Array.from(document.querySelectorAll('button'));

const colorFilterOrangeBtn = filterButtons[0];
const colorFilterGreenBtn = filterButtons[1];
const colorFilterGrayBtn = filterButtons[2];

const filterElements = (elementList, param) => {
  elementList.forEach((element) => {
    if (element.dataset.name === param) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  })
}

const filterElementsByFormInput = (elementList) => {
  const filterInputText = document.getElementById('filterTerm').value;
  filterElements(elementList, filterInputText)
}

submitFilterInput.addEventListener('click', filterElementsByFormInput.bind(null, boxElements));
colorFilterGrayBtn.addEventListener('click', filterElements.bind(null, boxElements, colorFilterGrayBtn.dataset.filter))
colorFilterGreenBtn.addEventListener('click', filterElements.bind(null, boxElements, colorFilterGreenBtn.dataset.filter))
colorFilterOrangeBtn.addEventListener('click', filterElements.bind(null, boxElements, colorFilterOrangeBtn.dataset.filter));
