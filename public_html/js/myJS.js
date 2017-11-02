/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myQuotes = [{"quote": "This is a quote", "author": "Joe Blogs"},
    {"quote": "adgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgsdf", "author": "srgasfdasfasdfasdssssssssssssssssssssssssssssssssssssssssssssssssssssssdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssswegwt"},
    {"quote": "dsfgsdfg", "author": "btrtwb"},
    {"quote": "sdfgsdf", "author": "btrwtw"},
    {"quote": "gfdgsdf", "author": "btrwb"},
    {"quote": "dfsgsfdg", "author": "trbwt"}];

var quote = myQuotes[Math.floor(Math.random() * myQuotes.length)];


function getRandomQuote() {
    quote = myQuotes[Math.floor(Math.random() * myQuotes.length)];
    document.getElementById("myQuote").innerHTML = quote.quote;
    document.getElementById("myAuthor").innerHTML = quote.author;
    return quote;
}

function tweetQuote() {

    var textToTweet = quote.quote + " - " + quote.author;
    if (textToTweet.length > 140) {
        alert('Tweet should be less than 140 Chars');
    } else {
        var twtLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
        window.open(twtLink, '_blank');
    }
}


