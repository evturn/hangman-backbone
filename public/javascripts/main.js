var words = new Words();
words.fetch({reset: true});
wordsView = new WordsView({collection: words});

$(function() {

console.log('words', words);


});