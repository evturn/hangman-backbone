var Guesses = Backbone.View.extend({
	el: '#game',
	template: _.template($('#game-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});