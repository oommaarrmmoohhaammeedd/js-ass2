

function PopularQuotes() {
    var names = ["― Oscar Wilde", "― Frank Zappa", "― Marcus Tullius Cicero", "― Mahatma Gandhi", "― Mae West", "― Thomas A. Edison", "― Allen Saunders"]
    var quotes = ["“Be yourself; everyone else is already taken.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”", "“Be the change that you wish to see in the world.”", "“You only live once, but if you do it right, once is enough.”", "“I have not failed. I've just found 10,000 ways that won't work.”", "“Life is what happens to us while we are making other plans.”"]
    var PopularQuote = Math.floor(Math.random(names) * names.length);
    document.getElementById("name").innerHTML = quotes[PopularQuote]
    document.getElementById("quote").innerHTML = names[PopularQuote]
}
PopularQuotes()