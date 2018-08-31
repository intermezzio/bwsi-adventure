var Game = function(output, buttons, inventory) {
	this.state = 0; // game state, 0 = start
	this.outputEl = outputEl; // DOM element
	this.btnsEl = buttonsEl;
	this.inventoryEl = inventoryEl;
	this.out = Array(); // output array
	this.inventory = {
		food: 5
	}
}

var Output = function(text, options) {
	this.txt = text; // text
	this.optns = options || Array(); // btn list
}

var Popup = function(text, btns) {
	this.txt = text; // text
	this.btns = btns || Array(); // btn list
}

var Btn = function(text, onclick, pos) {
	this.txt = text; // btn text
	this.onclick = onclick; // function on click
	this.pos = pos; // -1: left, 0: center, 1: right
}