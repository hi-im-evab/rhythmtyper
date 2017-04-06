
var stage;
var ticks;
var testMap;
var selectedMap;
var multiplierValue = 0.1;
var currentMultiplier = 1; //set to 1 initially
var score = new Score();



function load() {
	//create stage
    stage = new createjs.Stage("canvas");
	init();
    createjs.Ticker.setFPS(60);//notsure
    createjs.Ticker.addEventListener("tick", handleTick);
	
}


//
//
//

//Score and Progress
var maxScore;
var accuracyDisplay;
var multDisplay;
var highScore = 0;
var multiplier;
var currentIndex; //used for the max score at the currentIndex
var graded;

//Timing
var secToHit;
var secToLateHit;

//Circles
var apprCircle;
var backCircle;
var color;
var colors = [new createjs.ColorFilter(0,0,0,1,0,255,0, 0), new createjs.ColorFilter(0,0,0,1,255,0,0, 0), new createjs.ColorFilter(0,0,0,1,0,0,255, 0)];
var colorIt = 0;

function init(){
	
	//temp until menus
	currentMap = new TestMap();
	launchStandardMode(currentMap);
}

function handleTick(event){
    if(!event.paused){
        ticks += 1;
		updateScore();
		display();
		
        stage.update();
    }
}

function restart() {
    resetMap();
    stage.clear();
    stage = null;
	createjs.Ticker.reset();
	init();
	graded = false;
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);
	//calling the code twice fixed a pause bug
    resetMap();
    stage.clear();
    stage = null;
	createjs.Ticker.reset();
	init();
	graded = false;
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);
}


	
	