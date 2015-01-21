var LettersView = Backbone.View.extend({
	el: '#letter-bank',
	template: _.template($('#letter-bank-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	}
});