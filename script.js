const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



//show loader 
function loading() {
    loader.hidden = false;
    quoteContainer.hidden= true;
}
//hide loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden= false;
        loader.hidden= true;
    }
}

//get quote from api
async function getQuote(){
    loading();
    
    const apiUrl = 'https://api.quotable.io/random/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        authorText.innerText= data.author;
        quoteText.innerText=data.content;
    //stop loader, show quote 
    complete();    
    } catch(error){
     
    }
}
//tweetQuote
function tweetQuote(){
const quote = quoteText.innerText;
const author = authorText.innerText;
const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
window.open(twitterUrl, '_blank');
}
//event listeners
newQuoteBtn.addEventListener('click',getQuote);
twitterBtn.addEventListener('click',tweetQuote);


//on load
getQuote();
