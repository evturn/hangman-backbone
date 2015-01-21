var Guesses = Backbone.View.extend({
	el: '#guesses',
	template: _.template($('#guesses-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.render();
	}
});