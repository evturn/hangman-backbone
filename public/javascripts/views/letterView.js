var LetterView = Backbone.View.extend({
	el: '#letters',
	tagName: 'li',
	className: 'letter',
	template: _.template($('#letter-bank-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	}
});