//general game stuff
var stage;
var ticks;
var testMap;
var selectedMap;
var multiplierValue = 0.1;
var currentMultiplier = 1; //set to 1 initially
var score = new Score();

//maps
var selectedMap;

var testMap;

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
    
    //initialize maps
    testMap = new TestMap();
    
    //init
	init();
	
}

function init(){
	
	//temp until menus
	selectedMap = testMap;
	launchStandardMode(selectedMap);
    
}

function handleStandardTick(event){
    if(!event.paused){
        ticks += 1;
        
        //update things
		score.updateScore();
		displayStandard();
		
        stage.update();
    }
}

function restart(){
    stage.removeAllChildren();
	launchStandardMode(selectedMap);
}
