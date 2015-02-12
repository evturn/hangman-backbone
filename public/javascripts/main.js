$(function() {

	hangmanStart();

});

function hangmanStart() {
	game = new Game();
	bodyParts = new BodyParts();
	gameView = new GameView({model: game});
	letterInput = new LetterInput();
};