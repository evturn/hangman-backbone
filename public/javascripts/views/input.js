var Input = Backbone.View.extend({
	el: '#input',
	template: _.template($('#input-template').html()),
	events: {
		'click #input-submit': 'userGuess',
    'click .sweet-alert': 'startOver',
    'keypress #input-field': 'userEnter'
	},
	initialize: function() {
    used = [];
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
  prepTest: function() {
    guessValue = $('#input-field').val();
    letter = String(guessValue).toLowerCase();
      if ($.inArray(letter, used) === -1) {
        used.push(letter);
        newTries = game.get('tries');
        currentTries = (newTries + 1);
        game.set({tries: currentTries});
        currentLetter = new Letter({letter: letter});
      } else {
        sweetAlert("You already used '" + letter +"'");
      }
    $('#input-field').val('');
    this.testLetter();
  },
  userEnter: function(e) {
    if (e.which === 13) {
      this.prepTest();
    }
  },
  userGuess: function(e) {
    e.preventDefault();
    this.prepTest();
  },
  testLetter: function() {
    currentState = game.get('state');
    currentWord  = game.get('word');
      if (_.contains(currentWord, letter) == true) {
        splitState = currentState.split('');
        var pos = currentWord.indexOf(letter);
        splitState[pos] = letter;
        while (pos !== -1) {
          pos = currentWord.indexOf(letter, pos + 1);
          console.log('hell yeah dude', pos);
          splitState[pos] = letter;
      }
        currentState = splitState.join('');
        game.set({state: currentState});
        console.log(currentState);
      } else {
        console.log('nah dog');
        letterView = new LetterView({model: currentLetter});
        this.incorrectGuess();
      }
    this.potentialWinner();
  },
  incorrectGuess: function() {
    attempts = game.get('threshold');
    currentThreshold = (attempts - 1);
    game.set({threshold: currentThreshold});
    console.log(currentThreshold);
    this.loseLimb();
      if (currentThreshold == 0) {
        sweetAlert('Yalls is finished! Answer was "' + currentWord + '"');
        this.startOver();
      }
  },
  potentialWinner: function() {
    checkPoint = game.get('state');
      if (_.contains(currentState, '_') == false) {
        sweetAlert('You did it!');
        this.startOver(); 
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
  },
  startOver: function() {
    game = new Game();
    gameView = new GameView({model: game});
    bodyPart = new BodyPart({img: 'images/man6.png'});
    bodyPartView = new BodyPartView({model: bodyPart});
    $('#letters').empty();
    this.initialize();
  },
});