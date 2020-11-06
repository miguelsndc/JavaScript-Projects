const quoteGeneratorBtn = document.getElementById('quote-generator');
const quoteContainer = document.querySelector(".quote-container");
const quoteAuthor = document.querySelector(".quote-author");
let randomQuote;

const quotes = [
  {
    author: "Marilyn Monroe", quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
  },
  {
    author: "Albert Einstein", quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
  },
  {
    author: "Bernard M. Baruch", quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
  }
];

const generateRandomQuote = () => {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteContainer.innerHTML = randomQuote.quote;
  quoteAuthor.innerHTML = randomQuote.author;
}

quoteGeneratorBtn.addEventListener('click', generateRandomQuote);