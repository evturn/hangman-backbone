var LetterInput = Backbone.View.extend({
	el: '#letter-input',
	template: _.template($('#letter-input-template').html()),
	events: {
		'click #input-submit': 'userGuess'
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	userGuess: function(e) {
		e.preventDefault();
		guessValue = $('#input-field').val();
		letter = String(guessValue);
		this.testLetter();
	},
	testLetter: function() {
		if (_.contains(gameWord, letter) == true) {
			spots = _.indexOf(gameWord, letter);
			console.log('hell yeah dude');
		} else {
			console.log('nah dog');
			attempts = game.threshold - 1;
		}
		this.swapLetter();
	},
	swapLetter: function() {
		gameState[spots] = letter;
		game.set({state: gameState});
		newGame = new WordView({model: game});
		console.log(gameState);
	}
});