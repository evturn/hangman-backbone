var LetterView = Backbone.View.extend({
	tagName: li,
	className: 'letter',
	template: _.template($('#letter-bank-template').html()),
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});