var LetterView = Backbone.View.extend({
	tagName: 'li',
	className: 'letter',
	template: _.template($('#letter-bank-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'add', this.save);
	},
	render: function() {
		newLetter = this.model
		this.$el.append(this.template(newLetter));
		return this;
	}
});