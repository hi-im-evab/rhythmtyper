var stage;
var i; //iter for checkInput
var score;
var ticks = 0;
var scoreDisplay;

function load(){
	//alert("load");

	//do we need this load function?
	//or just go straight to init()?

	init();
}

function init(){
	stage = new createjs.Stage("canvas");
	//alert("init");
    
    // TICKER
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick",handleTick);
    
	//init variables
	i = 0;
	score = 0;

	//temp test
	var g = new createjs.Graphics();

	scoreDisplay = new createjs.Text(score, "20px Arial", "#000000");
		scoreDisplay.x = 0;
		scoreDisplay.y = 340;
	
    
	stage.addChild(scoreDisplay);
	
    //change to for loop
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
			checkInput("a");
		}
		if(event.keyCode == 66){
			checkInput("b");
		}
		if(event.keyCode == 67){
			checkInput("c");
		}
		if(event.keyCode == 68){
			checkInput("d");
		}
		if(event.keyCode == 69){
			checkInput("e");
		}
		if(event.keyCode == 70){
			checkInput("f");
		}
		if(event.keyCode == 71){
			checkInput("g");
		}
		if(event.keyCode == 72){
			checkInput("h");
		}
		if(event.keyCode == 73){
			checkInput("i");
		}
		if(event.keyCode == 74){
			checkInput("j");
		}
		if(event.keyCode == 75){
			checkInput("k");
		}
		if(event.keyCode == 76){
			checkInput("l");
		}
		if(event.keyCode == 77){
			checkInput("m");
		}
		if(event.keyCode == 78){
			checkInput("n");
		}
		if(event.keyCode == 79){
			checkInput("o");
		}
		if(event.keyCode == 80){
			checkInput("p");
		}
		if(event.keyCode == 81){
			checkInput("q");
		}
		if(event.keyCode == 82){
			checkInput("r");
		}
		if(event.keyCode == 83){
			checkInput("s");
		}
		if(event.keyCode == 84){
			checkInput("t");
		}
		if(event.keyCode == 85){
			checkInput("u");
		}
		if(event.keyCode == 86){
			checkInput("v");
		}
		if(event.keyCode == 87){
			checkInput("w");
		}
		if(event.keyCode == 88){
			checkInput("x");
		}
		if(event.keyCode == 89){
			checkInput("y");
		}
		if(event.keyCode == 90){
			checkInput("z");
		}
		if(event.keyCode == 27){
			alert("Esc");
			//no check input
			//used for pause
		}
	});
}

// Check if input matches next letter
function checkInput(key){
		//alert("check" + key);
		
		if(key == testMapLetters[0]){
			stage.removeChild(stage.getChildAt(1));
            
			//update score
			//will be based on timing
			score+=300;
			stage.getChildAt(0).text=score;
		}

		stage.update();
}

function handleTick(event){
    if(!event.paused){
        ticks += 1;
        /*if(ticks >= (testMapTiming[0]-2)*60 &&
        ticks <= (testMapTiming[0]*60)){
            letter1.visible = true;
            letter1.alpha += .0075;
        } else{
            letter1.visible = false;
        }*/
        
        /*if(ticks >= (testMapTiming[1]-2)*60 &&
        ticks <= (testMapTiming[1]*60)){
            letter2.visible = true;
            letter2.alpha += .0075;
        } else{
            letter2.visible = false;
        }*/
        
        displayLetter();
        //displayLetter(0);
        //displayLetter(1);
        
        scoreDisplay.text = (ticks/60);
        stage.update();
    }
}

/* OLD, less efficient //
function displayLetter(x){
    if(ticks >= (testMapTiming[x]-2)*60 &&
        ticks <= (testMapTiming[x]*60)){
            testMapObjects[x].visible = true;
            testMapObjects[x].alpha += .0075;
        } else{
            testMapObjects[x].visible = false;
        }
}*/

//More efficient
//Removes letter from arrays after its time is up
function displayLetter(){
    for(var j = 0; j < testMapLetters.length; j++){
        if(ticks >= (testMapTiming[j]-2)*60 &&
        ticks <= (testMapTiming[j]*60)){
            testMapObjects[j].visible = true;
            testMapObjects[j].alpha += .0075;
        } else {
            testMapObjects[j].visible = false;
            if(ticks >= (testMapTiming[j]*60)){
                testMapLetters.shift();
                testMapTiming.shift();
                testMapObjects.shift();
                j--;
            } 
        }
        
    }
}
