const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
        author: " Narcotics Anonymous",
    },
    {
        quote: "Without music, life would be a mistake.",
        author: " Friedrich Nietzsche, Twilight of the Idols",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone",
    },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;