
var stage;
var container; //contains score, progress, and EXPLOSIONS
var ticks;


//Score and Progress
var score;
var progress;
var scoreDisplay;
var progressDisplay;
var maxScore;
var accuracyDisplay;
var multDisplay;
var highScore = 0;
var multiplier;
var currentIndex;
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

function load() {
	init();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);
}
function init(){
	launchStandardMode(TestMap);
}

function handleTick(event){
    if(!event.paused){
        ticks += 1;
		var songDuration = document.getElementById("mapTrack").duration * 60; //Duration in ticks
		if(ticks < songDuration / 2){
			container.getChildAt(1).text = "Progress: " + ((ticks / songDuration) * 100 * 2).toFixed(1) + "%";
		} else{
			container.getChildAt(1).text = "Progress: 100%";
			if(!graded){
				graded = true;
				var percent = (score/maxScore * 100).toFixed(0);
				if(percent >= 100){
					alert("You recieved a grade of S for hitting PERFECT on EVERY LETTER!!!!!!!!!!");
				}
				else if(percent >= 90){
					alert("You recieved a grade of A for getting at least 90% of the points!");
				}
				else if(percent >= 80){
					alert("You recieved a grade of B for getting at least 80% of the points!");
				}
				else if(percent >= 70){
					alert("You recieved a grade of C for getting at least 70% of the points!");
				}
				else if(percent >= 60){
					alert("You recieved a grade of D for getting at least 60% of the points!");
				}
				else if(percent <= 60){
					alert("You recieved a grade of F and failed for getting less than 60% of the points.");
				}
			}
		}
		display();
		if (score > highScore) {
		    highScore = score;
		    container.getChildAt(3).text = ("High Score: " + highScore.toFixed(0));
		}
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


	
	