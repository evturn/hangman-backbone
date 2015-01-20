var LetterInput = Backbone.View.extend({
	el: '#letter-input',
	template: _.template($('#letter-input-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});