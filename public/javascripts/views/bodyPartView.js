var BodyPartView = Backbone.View.extend({
	el: '#hangman-image',
	template: _.template($('#hangman-image-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});