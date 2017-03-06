
var stage;
var container; //contains score, progress, and EXPLOSIONS
var ticks = 0;

//Score and Progress
var score = 0;
var progress = 0;
var scoreDisplay;
var progressDisplay;
var maxScore = (51 * 300);
var accuracyDisplay;

//Timing
var secToHit = 2;
var secToLateHit = 0.25;

//Circles
var apprCircle;
var backCircle;

//EXPLOSION data
var explosion = {
    framerate: 60,
    images:["assets/explosion.png"],
	frames:{width:64, height:64, count: 25},
	animations:{
		explode: [0, 24, 25, 0.5]
    }
}
var explosionSheet = new createjs.SpriteSheet(explosion);
function load(){
	//do we need this load function?
	//or just go straight to init()?

	init();
}

function init() {
    stage = new createjs.Stage("canvas");
	container = new createjs.Container();

    //Sound
    window.onload = function () {
        document.getElementById("mapTrack").play();
        document.getElementById("mapTrack").volume = .5;
    }

    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);
    
    // Score
    scoreDisplay = new createjs.Text("Score: " + score, "20px Arial", "#000000");
	scoreDisplay.x = 5;
	scoreDisplay.y = 335;
	container.addChild(scoreDisplay);
	
	//Percentage till completion
	progressDisplay = new createjs.Text("Progress:" + progress + "%", "16px Arial", "red");
	progressDisplay.textAlign = "right";
	progressDisplay.x = 635;
	progressDisplay.y = 5;
	container.addChild(progressDisplay);

    //Accuracy
    accuracyDisplay = new createjs.Text("Accuracy: 0%", "16px Arial", "red");
	accuracyDisplay.textAlign = "right";
	accuracyDisplay.x = 635;
	accuracyDisplay.y = 25;
    container.addChild(accuracyDisplay);
    
    stage.addChild(container);
	
    // Circles
    var g = new createjs.Graphics().setStrokeStyle(3).beginStroke("red").drawCircle(0,0,70);
    apprCircle = new createjs.Shape(g);
    apprCircle.visible = false;
    
    g = new createjs.Graphics().beginFill("#ff5e5e").drawCircle(0,0,20);
    backCircle = new createjs.Shape(g);
    backCircle.visible = false;
    
	//adding letters and circles to stage
    for(var i = 0; i < testMapObjects.length; i++)
    {
        //mapObject = the letter's displayable object
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
		    checkInput("esc");
			//no check input
			//used for pause
		}
	});
}

// Check if input matches next letter
function checkInput(key){
    for(var y = 0; y < 3; y++){
    if (key == testMapLetters[y]){
            var doBreak = false;
		//update score
        //will be based on timing in ticks
            if (ticks + 60 > (testMapTiming[y]) * 60
				&& ticks + 35 <= (testMapTiming[y]) * 60) {
                    score += 50;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
                } else if(ticks + 35 > (testMapTiming[y]) * 60
				&& ticks + 10 <= (testMapTiming[y]) * 60){
					score += 100;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
				} else if(ticks + 10 > (testMapTiming[y]) * 60
				&& ticks - 5 <= (testMapTiming[y]) * 60){
					score += 300;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
				} else if(ticks > (testMapTiming[y]) * 60 - 5
				&& ticks - 20 <= (testMapTiming[y]) * 60){
					score += 50;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
				}
			
			//Explode behind circle
			//container.addChild(explodeOnHit);
            
			container.getChildAt(0).text="Score: " + score;
            if(doBreak){
                break;
            }
		}
		else if (key == "esc") {
			var audio = document.getElementById("mapTrack");
			var timeAtPause = audio.currentTime;
			var progressAtPause = container.getChildAt(1).text;
		    if (createjs.Ticker.paused == false) {
		        createjs.Ticker.paused = true;
				container.getChildAt(1).text = "Paused";
		        audio.pause();
		    } else {
		        createjs.Ticker.paused = false;
				audio.currentTime = timeAtPause;
				container.getChildAt(1).text = progressAtPause;
		        document.getElementById("mapTrack").play();
		    }
		}

		stage.update();
    }
}

function handleTick(event){
    if(!event.paused){
        ticks += 1;
		var songDuration = document.getElementById("mapTrack").duration * 60; //Duration in ticks
		if(ticks < songDuration / 2){
			container.getChildAt(1).text = "Progress: " + ((ticks / songDuration) * 100 * 2).toFixed(1) + "%";
		} else{
			container.getChildAt(1).text = "Progress: 100%";
		}
		container.getChildAt(2).text = ("Accuracy: " + ((score/maxScore) * 100 * 2).toFixed(2) + "%");
        display();
        stage.update();
    }
}

//Removes letter from arrays after its time is up
function display(){
    var originalLetters = testMapLetters.length;
    for (var j = 0; j < originalLetters; j++) {
        //Before hit
        if(ticks >= ((testMapTiming[j]-secToHit)*60) &&
        ticks <= (testMapTiming[j]*60)){
            stage.getChildAt((j*3)+1).visible = true; //Background Circle
            stage.getChildAt((j*3)+2).visible = true; //Letter
            tempApprCircle = stage.getChildAt((j*3)+3);//Approach Circle
            tempApprCircle.visible = true;
            tempApprCircle.alpha = 0.5;
            //makes circle approach to enclose back circle
            tempApprCircle.scaleX -= 0.005952;
            tempApprCircle.scaleY -= 0.005952;

            testMapObjects[j].alpha += .0075;
    //alert(testMapLetters[0] + ", " + testMapTiming[0] + ", " + ticks/60);
        //Late hit
        }
        else if(ticks >= (testMapTiming[j]) * 60 &&
            ticks <= (testMapTiming[j] + secToLateHit) * 60 - 0){
            stage.getChildAt((j * 3) + 1).visible = false; //Background Circle
            stage.getChildAt((j * 3) + 2).visible = false; //Letter
            tempApprCircle = stage.getChildAt((j * 3) + 3)//Approach Circle
            tempApprCircle.visible = false;
        }

        //Miss
        else if (ticks >= (testMapTiming[j] + secToLateHit) * 60 - 0){
            //testMapObjects[j].visible = false;
            removeLetter(j);
            j--;
            originalLetters--;
        }
    }
}

function removeLetter(index){
    
    //alert(testMapLetters[index] + ", " + testMapTiming[index] + ", " + ticks/60);
			//explodeOnHit.x = testMapObjects[index].x - 20;
			//explodeOnHit.y = testMapObjects[index].y - 20;
            //stage.getChildAt(index + 1).visible = false; //Background Circle
            //stage.getChildAt(index  + 2).visible = false; //Letter
            //stage.getChildAt(index + 3).visible = false;//Approach Circle
                stage.removeChild(stage.getChildAt(index * 3 + 1));
                stage.removeChild(stage.getChildAt(index * 3 + 1));
                stage.removeChild(stage.getChildAt(index * 3 + 1));
                testMapLetters.splice(index, 1);
                testMapTiming.splice(index, 1);
                testMapObjects.splice(index, 1);
                maxScore += 300;
}

function explode(index){
    var explodeOnHit = new createjs.Sprite(explosionSheet, explode);
    explodeOnHit.alpha = .5;
    explodeOnHit.x = testMapObjects[index].x - 20;
    explodeOnHit.y = testMapObjects[index].y - 20;
    container.addChild(explodeOnHit);
    setTimeout(function(){container.removeChild(explodeOnHit);}, 416);
}
