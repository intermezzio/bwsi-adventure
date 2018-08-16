class Game {
	constructor(outputEl, buttonsEl, inventoryEl) {
		this.state = 0; // game state, 0 = start
		this.outputEl = outputEl; // DOM element
		this.buttonsEl = buttonsEl;
		this.inventoryEl = inventoryEl;

		this.output = Array();
		this.buttons = Array();
		this.inventory = {
			item: 0,
			otherItem: 0
			//items : quantity
		};
	};
	
}