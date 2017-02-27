var stage;
var ticks = 0;
var score = 0;
var scoreDisplay;
var secToHit = 2;
var apprCircle;
var backCircle;

function load(){
	//do we need this load function?
	//or just go straight to init()?

	init();
}

function init(){
	stage = new createjs.Stage("canvas");
    
    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick",handleTick);
    
    // Score
    scoreDisplay = new createjs.Text(score, "20px Arial", "#000000");
		scoreDisplay.x = 0;
		scoreDisplay.y = 340;
	stage.addChild(scoreDisplay);

    var g = new createjs.Graphics().setStrokeStyle(3).beginStroke("red").drawCircle(0,0,70);
    apprCircle = new createjs.Shape(g);
    apprCircle.visible = false;
    
    g = new createjs.Graphics().beginFill("#ff5e5e").drawCircle(0,0,20);
    backCircle = new createjs.Shape(g);
    backCircle.visible = false;
    
	//adding letters and circles to stage
    for(var i = 0; i < testMapObjects.length; i++)
    {
        var mapObject = testMapObjects[i];
        
        var backCircleClone = backCircle.clone();
        backCircleClone.x = mapObject.x + mapObject.getMeasuredWidth()/2;
        backCircleClone.y = mapObject.y + mapObject.getMeasuredHeight()/2;
        stage.addChild(backCircleClone);
        
        stage.addChild(mapObject);
        
        var apprCircleClone = apprCircle.clone();
        apprCircleClone.x = mapObject.x + mapObject.getMeasuredWidth()/2;
        apprCircleClone.y = mapObject.y + mapObject.getMeasuredHeight()/2;
        stage.addChild(apprCircleClone)
    }

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
		
		if(key == testMapLetters[0] && ticks >= (testMapTiming[0]-secToHit)*60 &&
        ticks <= (testMapTiming[0]*60)){
			stage.removeChild(stage.getChildAt(1));
			stage.removeChild(stage.getChildAt(1));
			stage.removeChild(stage.getChildAt(1));
                testMapLetters.shift();
                testMapTiming.shift();
                testMapObjects.shift();
            
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
        
        display();
        
        scoreDisplay.text = (ticks/60); //testing purposes, remove later
        stage.update();
    }
}


//More efficient
//Removes letter from arrays after its time is up
function display(){
    for(var j = 0; j < testMapLetters.length; j++){
        if(ticks >= (testMapTiming[j]-secToHit)*60 &&
        ticks <= (testMapTiming[j]*60)){
            stage.getChildAt((j*3)+1).visible = true; //Background Circle
            stage.getChildAt((j*3)+2).visible = true; //Letter
            tempApprCircle = stage.getChildAt((j*3)+3)//Approach Circle
            tempApprCircle.visible = true;
            //makes circle approach to enclose back circle
            tempApprCircle.scaleX -= 0.005952;
            tempApprCircle.scaleY -= 0.005952;
            
            testMapObjects[j].alpha += .0075;
        } else {
            testMapObjects[j].visible = false;
            if(ticks >= (testMapTiming[j]*60)){
                stage.removeChild(stage.getChildAt(1));
                stage.removeChild(stage.getChildAt(1));
                stage.removeChild(stage.getChildAt(1));
                testMapLetters.shift();
                testMapTiming.shift();
                testMapObjects.shift();
                j--;
            } 
        }
        
    }
}
