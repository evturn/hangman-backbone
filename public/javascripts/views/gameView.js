var GameView = Backbone.View.extend({
	el: '#word',
  template: _.template($('#game-template').html()),
	initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  // setGame: function() {
  //   state = new State({name: hiddenWord});
  //   theState = state.get('name');
  //   gameState = theState.split('');
  //   gameWord = theWord.split('');
  //   game = new Game({word: gameWord, state: gameState, tries: 0, threshold: 6})
  //   guesses = new Guesses({model: game});
  //   console.log('game', game);
  // },
});