/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myQuotes = [{"quote": "This is a quote", "author": "Joe Blogs"},
    {"quote": "adgfgsdf", "author": "srgwegwt"},
    {"quote": "dsfgsdfg", "author": "btrtwb"},
    {"quote": "sdfgsdf", "author": "btrwtw"},
    {"quote": "gfdgsdf", "author": "btrwb"},
    {"quote": "dfsgsfdg", "author": "trbwt"}];



function getRandomQuote() {
    var quote = myQuotes[Math.floor(Math.random()*myQuotes.length)];
    document.getElementById("myQuote").innerHTML = quote.quote;
    document.getElementById("myAuthor").innerHTML = quote.author;
    return quote;              
}
