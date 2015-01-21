var game = new Game();
game.fetch({reset: true});
console.log(game);
var gameView = new GameView({model: game});
new LetterInput();
new HangmanImage();

$(function() {



});