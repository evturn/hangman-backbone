var LetterView = Backbone.View.extend({
	tagName: li,
	className: 'letter',
	template: _.template($('#letter-bank-template').html()),
	render: function() {
		newLetter = this.model
		this.$el.html(this.template(newLetter));
		return this;
	}
});