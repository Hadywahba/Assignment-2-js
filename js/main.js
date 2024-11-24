var quotes=[
    {
        quote:'“Be yourself; everyone else is already taken.”',
        author:'― Oscar Wilde',
    },
    {
        quote:'“A room without books is like a body without a soul.”',
        author:'― Marcus Tullius Cicero',
    },
    {
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author:'― Dr. Seuss',
    },
    {
        quote:'“You only live once, but if you do it right, once is enough.”',
        author:'― Mae West',
    }
    
]

function addQuote(){
    var rondomQutoes= Math.floor(Math.random()*quotes.length);
    console.log(rondomQutoes);
    document.getElementById("myQuote").innerHTML=quotes[rondomQutoes].quote;
    document.getElementById("myAuthor").innerHTML=quotes[rondomQutoes].author;
    }
    



