//fun Stuff
var circleScale = 0.005952;
var ticksScale = 1;

//general game stuff
var stage;
var currentMenu;
var ticks;

//maps
var selectedMap;
var selectedMapString;


//score stuff
var multiplierValue = 0.1;
var currentMultiplier = 1; //set to 1 initially
var score;

//hit stuffs
var secToHit = 2;
var secToLateHit = 0.25;


function load() {
	//create stage
    stage = new createjs.Stage("canvas");
    
    //init methods
    keyInput();
    
    //init
	init();
	
}

function init(){
	
    mainMenu();
}

function handleStandardTick(event){
    if(!event.paused){
        //increment ticks for timing
        ticks += ticksScale;
        
        //update things
		score.updateScore();
		standardDisplay();
		
        stage.update();
    }
}

function restart(){
    createjs.Ticker.reset();
    createjs.Ticker.paused = false;
    currentMultiplier = 1;
    selectMap(selectedMapString);
    stage.removeAllChildren();
	launchStandardMode(selectedMap);
}

function selectMap(choice){
    if(choice === 'song1'){
        selectedMap = new Song1;
    }
    if (choice === 'song2') {
        selectedMap = new Song2;
    }
}


