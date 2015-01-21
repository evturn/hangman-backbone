var words = new Words();
words.fetch({reset: true});
gameView = new GameView({collection: words});
new LetterInput();
new HangmanImage();

$(function() {



});