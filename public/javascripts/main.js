var games = new Games();
games.fetch({reset: true});
gameView = new GameView({collection: games});
new LetterInput();
new HangmanImage();

$(function() {



});