var getQuote = document.getElementById('getQuote')
var quoteTitle = document.getElementById('quote')
var authorName = document.getElementById('author')

var arrayOfQuotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: '--Oscar Wilde'
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: '--Marilyn Monroe'
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: '--Albert Einstein'
  },
  {
    quote: 'So many books, so little time',
    author: '--Frank Zappa'
  },
  {
    quote: 'A room without books is like a body without a soul.',
    author: '--Marcus Tullius Cicero'
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: '--Mahatma Gandhi'
  },
  {
    quote:
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: '--Mahatma Gandhi'
  },
  {
    quote:
      'It is better to be hated for what you are than to be loved for what you are not.',
    author: '--Andre Gide, Autumn Leaves'
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: '--Dr. Seuss'
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: '--Mae West'
  }
]

function quoteShow(){
    var constant= Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    
    quoteTitle.innerHTML = arrayOfQuotes[constant].quote;
    authorName.innerHTML = arrayOfQuotes[constant].author;

}