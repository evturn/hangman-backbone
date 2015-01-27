
$(function() {

	hangmanStart();
	
	input.on('focus', function(){
    header.css({position:'absolute'});
    $(window).scrollTop(0);
	});
	input.on('blur', function(){
    header.css({position:'fixed'});
});


});


function hangmanStart() {
	game = new Game();
	new GameView({model: game});
	console.log(game);
	new LetterInput();
	bodyParts = new BodyParts();
};