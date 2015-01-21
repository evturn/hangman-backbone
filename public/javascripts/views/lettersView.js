var LettersView = Backbone.View.extend({
	el: '#letter-bank',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function() {
		
	}
});