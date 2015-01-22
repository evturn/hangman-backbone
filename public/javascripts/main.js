game = new Game();
new GameView({model: game});
console.log(game);
new LetterInput();
bodyParts = new BodyParts();
letters = new Letters();
$(function() {
	
});


$('#dbl-exclimation').on('click', function() {
	grabbedMoment = momentsCollection.get(2);
	console.log(grabbedMoment);
})