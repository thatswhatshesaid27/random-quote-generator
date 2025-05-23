var quotes=[{'Dale Carnegie':'Action breeds confidence and courage. Inaction breeds doubt and fear'}, {'Walt Disney':'The way to get started is to quit talking and begin doing'},{'Theodore Roosevelt':'Believe you can and youre halfway there.'},{'Vince Lombardi':'Winning is not a sometime thing; its an all the time thing.'},{'Oprah Winfrey':'You become what you believe.'},{'Benjamin Franklin':'I didnt fail the test. I just found 100 ways to do it wrong.'},{'Napoleon Hill':'Whatever the mind of man can conceive and believe, it can achieve.'},{'Abraham Lincoln':'In the end, its not the years in your life that count. Its the life in your years.'}]

// let str = JSON.stringify(quotesArray[1])
// let dic= JSON.parse(str)
// const author = Object.keys(dic)[0];  
// console.log(author)
// const message = dic[author];  
// console.log(message)
// // console.log(JSON.stringify(quotesArray[1]))
// console.log(storedQuotes.length)
// console.log(show)
// console.log(localStorage.getItem(quotes[0]))

function generate(){
  localStorage.setItem('quotes', JSON.stringify(quotes));
  var storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
  var quotesArray = JSON.parse(storedQuotes); // Convert string back to array
}
  let num = Math.floor(Math.random() * quotes.length);  
  let str = JSON.stringify(quotesArray[num])
  let dic= JSON.parse(str)
  const author = Object.keys(dic)[0];  
  console.log(author)
  const message = dic[author];  
  console.log(message)
  document.getElementById('quote').innerHTML=message
  document.getElementById('author').innerHTML=author
  }


function addQuote(){
  let newQ = document.getElementById('input-quote').value
  // console.log(newQ)
  let person = document.getElementById('quotationist').value
  // console.log(person)
  // console.log(auth)
  let newObj={[person]:newQ}
  console.log(typeof(newObj))
  quotes.push(newObj)
  localStorage.setItem('quotes', JSON.stringify(quotes));
  console.log(quotes)
  
}