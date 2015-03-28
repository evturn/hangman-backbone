function hangmanStart() {
	game = new Game();
	bodyParts = new BodyParts();
	gameState = new GameState({model: game});
	input = new Input();
};
hangmanStart();