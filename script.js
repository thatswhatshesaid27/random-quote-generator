// Default quotes
var quotes = [
  { 'Dale Carnegie': 'Action breeds confidence and courage. Inaction breeds doubt and fear' },
  { 'Walt Disney': 'The way to get started is to quit talking and begin doing' },
  { 'Theodore Roosevelt': 'Believe you can and youre halfway there.' },
  { 'Vince Lombardi': 'Winning is not a sometime thing; its an all the time thing.' },
  { 'Oprah Winfrey': 'You become what you believe.' },
  { 'Benjamin Franklin': 'I didnt fail the test. I just found 100 ways to do it wrong.' },
  { 'Napoleon Hill': 'Whatever the mind of man can conceive and believe, it can achieve.' },
  { 'Abraham Lincoln': 'In the end, its not the years in your life that count. Its the life in your years.' }
];

// Only set default quotes if none are saved yet
if (!localStorage.getItem('quotes')) {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

function addQuote() {
  let newQ = document.getElementById('input-quote').value;
  document.getElementById('input-quote').value = '';
  
  let person = document.getElementById('quotationist').value;
  document.getElementById('quotationist').value = '';
  if (!newQ || !person) {
    alert('Please enter both quote and author');
    return;
  }
  let already=JSON.parse(localStorage.getItem('quotes')) || [];
  if(already.map(q => Object.keys(q)[0] === person) && already.map(q => q[person] === newQ)){
    alert('This quote already exists for this author.');
    return;{

  }
}
  // let storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  // if(storedQuotes.map(q=>{
  //   return Object.keys(q)[0];
  // })){



  

  let newObj = { [person]: newQ };

  // Load existing quotes from localStorage
  let storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  storedQuotes.push(newObj);

  // Save updated list
  localStorage.setItem('quotes', JSON.stringify(storedQuotes));
  alert('Quote added successfully!');

  console.log('Quote added:', newObj);
}

function generate() {
  var storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    var quotesArray = JSON.parse(storedQuotes);
  }

  let num = Math.floor(Math.random() * quotesArray.length);
  let str = JSON.stringify(quotesArray[num]);
  let dic = JSON.parse(str);
  const author = Object.keys(dic)[0];
  const message = dic[author];

  document.getElementById('quote').innerHTML = message;
  document.getElementById('author').innerHTML = author;
}


function showAllQuotes(){
   let storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];

   alert('All Quotes:\n' + storedQuotes.map(q => {
    let author = Object.keys(q)[0];
    return `${author}: "${q[author]}"`;
    
}).join('\n'));
}
