var LettersView = Backbone.View.extend({
	el: '#letter-bank',
	initialize: function() {
		this.listenTo(letters, 'add', this.addOne);
	},
	addOne: function(model) {
		var letterView = LetterView({model: model});
		this.$el.append(letterView.render().el);
	}
});