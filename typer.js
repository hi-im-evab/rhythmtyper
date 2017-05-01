

//general game stuff
var stage;
var currentMenu;
var ticks;
var score

//maps
var selectedMap;
var selectedMapString;




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




