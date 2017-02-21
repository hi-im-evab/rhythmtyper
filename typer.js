var stage;
var KEYCODE_LEFT = 37, 
		KEYCODE_RIGHT = 39,
		KEYCODE_UP = 38, 
		KEYCODE_DOWN = 40;

function load(){
	alert("load");
	init();
}

function init(){
	stage = new createjs.Stage("canvas");
	alert("init");

	keyInput();
}

function keyInput(){
	document.addEventListener('keydown', function(event){
		if(event.keyCode == 65){
			alert("A");
		}
		if(event.keyCode == 66){
			alert("B");
		}
		if(event.keyCode == 67){
			alert("C");
		}
		if(event.keyCode == 68){
			alert("D");
		}
		if(event.keyCode == 69){
			alert("E");
		}
		if(event.keyCode == 70){
			alert("F");
		}
		if(event.keyCode == 71){
			alert("G");
		}
		if(event.keyCode == 72){
			alert("H");
		}
		if(event.keyCode == 73){
			alert("I");
		}
		if(event.keyCode == 74){
			alert("J");
		}
		if(event.keyCode == 75){
			alert("K");
		}
		if(event.keyCode == 76){
			alert("L");
		}
		if(event.keyCode == 77){
			alert("M");
		}
		if(event.keyCode == 78){
			alert("N");
		}
		if(event.keyCode == 79){
			alert("O");
		}
		if(event.keyCode == 80){
			alert("P");
		}
		if(event.keyCode == 81){
			alert("Q");
		}
		if(event.keyCode == 82){
			alert("R");
		}
		if(event.keyCode == 83){
			alert("S");
		}
		if(event.keyCode == 84){
			alert("T");
		}
		if(event.keyCode == 85){
			alert("U");
		}
		if(event.keyCode == 86){
			alert("V");
		}
		if(event.keyCode == 87){
			alert("W");
		}
		if(event.keyCode == 88){
			alert("X");
		}
		if(event.keyCode == 89){
			alert("Y");
		}
		if(event.keyCode == 90){
			alert("Z");
		}
	});
}