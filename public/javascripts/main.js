
$(function() {

	hangmanStart();

});


function hangmanStart() {
	game = new Game();
	new GameView({model: game});
	console.log(game);
	new LetterInput();
	bodyParts = new BodyParts();
};