var quotes = document.getElementById("quoteItem");
var quoteItem = document.getElementById("quoteItem2");
var arr =[
        {
                'quote' : `“Be yourself; everyone else is already taken.”`,
                'author' : `― Oscar Wilde`
        },
        {
                'quote' : `“So many books, so little time.”`,
                'author' : `― Frank Zappa`
        },
        {
                'quote' : `“A day without sunshine is like, you know, night.”`,
                'author' : `― Steve Martin`
        },
        {
                'quote' : `“That which does not kill us makes us stronger.”`,
                'author' : `― Friedrich Nietzsche`
        },
        {
                'quote' : `“It is never too late to be what you might have been.”`,
                'author' : `― George Eliot`
        },
        {
                'quote' : `“Everything you can imagine is real.”`,
                'author' : `― Pablo Picasso`
        },
        {
                'quote' : `“We don't see things as they are, we see them as we are.”`,
                'author' : `― Anaïs Nin`
        },
        {
                'quote' : `“We read to know we're not alone.”`,
                'author' : `― William Nicholson`
        },
        {
                'quote' : `“I'm in love with you," he said quietly.`,
                'author' : `"Augustus," I said.`
        },
];
function getQuotes(){
        var random =Number.parseInt(Math.random()* arr.length+1)
        document.getElementById("quoteItem").innerHTML=`${arr[random].quote}`
          document.getElementById("quoteItem2").innerHTML=`${arr[random].author}`

}
 