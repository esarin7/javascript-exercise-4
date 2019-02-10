var bookQuotes = [
    {quote:'Catch the heart off guard and blow it open.', author: ' –Seamus Heaney, from Selected Poems: 1966-1987; “Postscript.”'},
    {quote:'Human beings must always be on the watch for the coming of wonders.', author: '-E.B. White in Charlotte’s Web'},
    {quote:'To love without knowing how to love wounds the person we love.', author:'-Thich Nhat Hanh in How to Love.'},
    {quote:'Let us temper our criticism with kindness. None of us comes fully equipped.', author: ' –Carl Sagan in  The Demon-Haunted World: Science as a Candle in the Dark'},
    {quote:'Literature is the operating instructions. The best manual we have. The most useful guide to the country we’re visiting, life.', author:' –Ursula K. Le Guin in Words are My Matter: Writings About Life and Books'},
];
//buttons
var prev = document.getElementsByClassName('previous');

var next = document.getElementsByClassName('next');

//functions

function quoteChanger (array){
    var quoteBox = document.getElementsByClassName('quotebox')[0];
    console.log(quoteBox);
setInterval(newQuote, 30000); //set automatic time intervals - 30 seconds

var i = 0;

function newQuote() {
    var quoteTemplate = "<div class=\"quote\">" + bookQuotes[i].quote + "</div>";

    var authorTemplate = "<div>" + bookQuotes[i].author + "</div>";
  
    quoteBox.innerHTML = quoteTemplate + authorTemplate;
    i++;

    if (i >= array.length){
    i = 0;

    } 
}
}
quoteChanger(bookQuotes);


