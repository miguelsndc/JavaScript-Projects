const testimonialAvatar = document.querySelector('.testimonial-avatar')
const testimonialAuthor = document.querySelector('.testimonial-author')
const testimonialText = document.querySelector('.testimonial-text')
const TestimonialButtons = Array.from(document.querySelectorAll('button'))

const prevTestimonialBtn = TestimonialButtons[0];
const nextTestimonialBtn = TestimonialButtons[1];

let counter = 0;

class Testimonial {
  constructor(avatarPath, author, text) {
    this.avatar = avatarPath
    this.author = author
    this.text = text
  }

  render() {
    testimonialAvatar.style.backgroundImage = `url(${this.avatar})`
    testimonialAuthor.textContent = `${this.author}`
    testimonialText.textContent = `${this.text}`
  }
}

const clientsTestimonials = [
  new Testimonial('"./images/avatar.svg"', 'WANDA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
  new Testimonial('"./images/avatar-1.svg"', 'GEORGE', 'Lore Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
  new Testimonial('"./images/avatar-2.svg"', 'HARRY', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud eExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
]

let app = clientsTestimonials[counter];
app.render()

const verifyCounter = value => {
  if (value > clientsTestimonials.length - 1) {
    value = 0
    return value
  }
  else if (value < 0) {
    value = clientsTestimonials.length - 1;
    return value
  }
  else {
    return value
  }
}

const slideToPrevTestimonial = () => {
  counter--
  counter = verifyCounter(counter)
  app = clientsTestimonials[counter]
  app.render()
}

const slideToNextTestimonial = () => {
  counter++
  counter = verifyCounter(counter)
  app = clientsTestimonials[counter]
  app.render()
}


prevTestimonialBtn.addEventListener('click', slideToPrevTestimonial)
nextTestimonialBtn.addEventListener('click', slideToNextTestimonial)