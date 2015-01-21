var games = new Games();
games.fetch({reset: true});
console.log(games);
gameView = new GameView({collection: games});
new LetterInput();
new HangmanImage();

$(function() {



});