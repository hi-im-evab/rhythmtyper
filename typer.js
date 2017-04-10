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
    
    //initialize maps
    
    //init
	init();
	
}

function init(){
	
	//temp until menus
    selectedMapString = 'testMap';
    selectMap(selectedMapString);
	launchStandardMode(selectedMap);
    
}

function handleStandardTick(event){
    if(!event.paused){
        ticks += 1;
        
        //update things
		score.updateScore();
		standardDisplay();
		
        stage.update();
    }
}

function restart(){
    createjs.Ticker.reset();
    selectMap(selectedMapString);
    stage.removeAllChildren();
	launchStandardMode(selectedMap);
}

function selectMap(choice){
    if(choice === 'testMap'){
        selectedMap = new TestMap;
    }
}


