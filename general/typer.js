

//general game stuff
var stage;
var currentMenu;
var ticks;
var score;

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
    //initial main menu screen
    mainMenu();
}





