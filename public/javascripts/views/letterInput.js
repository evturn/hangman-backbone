var LetterInput = Backbone.View.extend({
	el: '#letter-input',
	template: _.template($('#letter-input-template').html()),
	events: {
		'click #input-submit': 'userGuess',
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
		currentLetter = new Letter({letter: letter});
		$('#input-field').val('');
		newTries = game.get('tries');
		currentTries = (newTries + 1);
		game.set({tries: currentTries});
		this.testLetter();
	},
	 testLetter: function() {
    currentState = game.get('state');
    currentWord  = game.get('word');
      if (_.contains(currentWord, letter) == true) {
        spots = _.indexOf(currentWord, letter);
        console.log('hell yeah dude', spots);
   			splitState = currentState.split('');
      	splitState[spots] = letter;
      	currentState = splitState.join('');
      	game.set({state: currentState});
      	console.log(currentState);
      } else {
        console.log('nah dog');
        this.incorrectGuess();
      }   
  },
   incorrectGuess: function() {
    attempts = game.get('threshold');
	 	currentThreshold = (attempts - 1);
	 	game.set({threshold: currentThreshold});
	 	console.log(currentThreshold);
	 	this.loseLimb();
	 		if (currentThreshold == 0) {
	 			sweetAlert('Yalls is finished');
	 		}
  },
  loseLimb: function() {
  	if (currentThreshold == 6){
  		new BodyPartView({model: bodyParts.models[5]});
  	} else if  (currentThreshold == 5){
  		new BodyPartView({model: bodyParts.models[4]});
  	} else if  (currentThreshold == 4){
  		new BodyPartView({model: bodyParts.models[3]});
  	} else if  (currentThreshold == 3){
  		new BodyPartView({model: bodyParts.models[2]});
  	}	else if  (currentThreshold == 2){
  		new BodyPartView({model: bodyParts.models[1]});
  	} else if  (currentThreshold == 1){
  		new BodyPartView({model: bodyParts.models[0]});
  	} else if  (currentThreshold == 0){
  		new BodyPartView({model: bodyParts.models[0]})
  	} else {

  	}
  }
});