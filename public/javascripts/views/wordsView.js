var WordsView = Backbone.View.extend({
	el: '#word',
	initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(model) {
    var view = new WordView({model: model});
    this.$el.append(view.el);
  },
  addAll: function() {
    this.$el.empty();
    // make function pulling random model
    // then function pulling name and length
    this.collection.each(function(model) {
    theWord = model.get('name');
    characters = model.get('name').length;
    this.setHidden();
    //
    // this.addOne(model);
    }.bind(this));
  },
  setHidden: function() { 
    String.prototype.repeat = function(characters) {
      return new Array(characters + 1).join(this);
      }
    hiddenWord = ("_".repeat(characters));
    this.setGame();
  },
  setGame: function() {
    state = new State({name: hiddenWord});
    theState = state.get('name');
    gameState = theState.split('');
    gameWord = theWord.split('');
    game = new Game({word: gameWord, state: theState, tries: 0, threshold: 6})
    guesses = new Guesses({model: game});
    console.log('game', game);
  },
});