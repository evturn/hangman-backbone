var words = new Words();
words.fetch({reset: true});
wordsView = new WordsView({collection: words});
new LetterInput();
new HangmanImage();

$(function() {



});