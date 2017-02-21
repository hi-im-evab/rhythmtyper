var stage;
var mapLetters = ["a", "b", "f"];
var mapTiming;
var i; //iter for checkInput
var score;

function load(){
	//alert("load");

	//do we need this load function?
	//or just go straight to init()?

	init();
}

function init(){
	stage = new createjs.Stage("canvas");
	//alert("init");

	//init variables
	i = 0;
	score = 0;

	//temp test
	var g = new createjs.Graphics();
	var letter1 = new createjs.Text(mapLetters[0], "20px Arial", "#000000");
		letter1.x = 50;
		letter1.y = 50;
	var letter2 = new createjs.Text(mapLetters[1], "20px Arial", "#000000");
		letter2.x = 70;
		letter2.y = 50;
	var letter3 = new createjs.Text(mapLetters[2], "20px Arial", "#000000");
		letter3.x = 90;
		letter3.y = 50;
	var scoreDisplay = new createjs.Text(score, "20px Arial", "#000000");
		scoreDisplay.x = 0;
		scoreDisplay.y = 340;
	
	stage.addChild(scoreDisplay);
	
	stage.addChild(letter1);
	stage.addChild(letter2);
	stage.addChild(letter3);

	stage.update();

	keyInput();

	
}

// Keys A-Z and ESC
function keyInput(){
	document.addEventListener('keydown', function(event){
		if(event.keyCode == 65){
			alert("A");
			checkInput("a");
		}
		if(event.keyCode == 66){
			alert("B");
			checkInput("b");
		}
		if(event.keyCode == 67){
			alert("C");
			checkInput("c");
		}
		if(event.keyCode == 68){
			alert("D");
			checkInput("d");
		}
		if(event.keyCode == 69){
			alert("E");
			checkInput("e");
		}
		if(event.keyCode == 70){
			alert("F");
			checkInput("f");
		}
		if(event.keyCode == 71){
			alert("G");
			checkInput("g");
		}
		if(event.keyCode == 72){
			alert("H");
			checkInput("h");
		}
		if(event.keyCode == 73){
			alert("I");
			checkInput("i");
		}
		if(event.keyCode == 74){
			alert("J");
			checkInput("j");
		}
		if(event.keyCode == 75){
			alert("K");
			checkInput("k");
		}
		if(event.keyCode == 76){
			alert("L");
			checkInput("l");
		}
		if(event.keyCode == 77){
			alert("M");
			checkInput("m");
		}
		if(event.keyCode == 78){
			alert("N");
			checkInput("n");
		}
		if(event.keyCode == 79){
			alert("O");
			checkInput("o");
		}
		if(event.keyCode == 80){
			alert("P");
			checkInput("p");
		}
		if(event.keyCode == 81){
			alert("Q");
			checkInput("q");
		}
		if(event.keyCode == 82){
			alert("R");
			checkInput("r");
		}
		if(event.keyCode == 83){
			alert("S");
			checkInput("s");
		}
		if(event.keyCode == 84){
			alert("T");
			checkInput("t");
		}
		if(event.keyCode == 85){
			alert("U");
			checkInput("u");
		}
		if(event.keyCode == 86){
			alert("V");
			checkInput("v");
		}
		if(event.keyCode == 87){
			alert("W");
			checkInput("w");
		}
		if(event.keyCode == 88){
			alert("X");
			checkInput("x");
		}
		if(event.keyCode == 89){
			alert("Y");
			checkInput("y");
		}
		if(event.keyCode == 90){
			alert("Z");
			checkInput("z");
		}
		if(event.keyCode == 27){
			alert("Esc");
			//no check input
			//used for pause
		}
	});
}

function checkInput(key){
		//alert("check" + key);
		
		if(key == mapLetters[i]){
			stage.removeChild(stage.getChildAt(1));
			i++;

			//update score
			//will be based on timing
			score+=300;
			stage.getChildAt(0).text=score;
		}

		stage.update();
}