
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

function load() {
	init();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);
}

function init() {
    currentIndex = 0;
    score = 0;
    maxScore = 0;
    progress = 0;
    secToHit = 2;
    secToLateHit = 0.25;
    ticks = 0;
    multiplier = 1;
	graded = true;

    stage = new createjs.Stage("canvas");
    container = new createjs.Container();

    //Sound
	document.getElementById("mapTrack").load();
    document.getElementById("mapTrack").play();
    document.getElementById("mapTrack").volume = .5;

    // Ticker
    
    // Score
    scoreDisplay = new createjs.Text("Score: " + score, "20px Arial", "#000000");
	scoreDisplay.x = 5;
	scoreDisplay.y = 335;
	container.addChildAt(scoreDisplay, 0);
	
	//Percentage till completion
	progressDisplay = new createjs.Text("Progress:" + progress + "%", "16px Arial", "red");
	progressDisplay.textAlign = "right";
	progressDisplay.x = 635;
	progressDisplay.y = 5;
	container.addChildAt(progressDisplay, 1);

    //Accuracy
    accuracyDisplay = new createjs.Text("Accuracy: 0%", "16px Arial", "red");
	accuracyDisplay.textAlign = "right";
	accuracyDisplay.x = 635;
	accuracyDisplay.y = 25;
	container.addChildAt(accuracyDisplay, 2);

    //High Score
	highScoreDisplay = new createjs.Text("High Score: " + highScore.toFixed(0), "20px Arial", "#000000");
	highScoreDisplay.x = 225;
	highScoreDisplay.y = 335;
	container.addChildAt(highScoreDisplay, 3);

    //multiplier
	multDisplay = new createjs.Text("Multiplier: " + multiplier.toFixed(1), "20px Arial", "#000000");
	multDisplay.textAlign = "right";
	multDisplay.x = 600;
	multDisplay.y = 335;
	container.addChildAt(multDisplay, 4);
    
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
		backCircleClone.cache(-22, -22,  44, 44);
        stage.addChild(backCircleClone);
        
        stage.addChild(mapObject);
        
        var apprCircleClone = apprCircle.clone();
        apprCircleClone.x = mapObject.x + mapObject.getMeasuredWidth()/2;
        apprCircleClone.y = mapObject.y + mapObject.getMeasuredHeight()/2;
		apprCircleClone.cache(-72, -72,  144, 144);
        stage.addChild(apprCircleClone)
    }

	graded = false;
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
                    score += 50 * multiplier;
                    multiplier += 0.1;
					maxScore += 300 * (1 + 0.1 * currentIndex);
					currentIndex += 1;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
                } else if(ticks + 35 > (testMapTiming[y]) * 60
				&& ticks + 10 <= (testMapTiming[y]) * 60){
                    score += 100 * multiplier;
                    multiplier += 0.1;
					maxScore += 300 * (1 + 0.1 * currentIndex);
					currentIndex += 1;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
				} else if(ticks + 10 > (testMapTiming[y]) * 60
				&& ticks - 5 <= (testMapTiming[y]) * 60){
				    score += 300 * multiplier;
				    multiplier += 0.1;
					maxScore += 300 * (1 + 0.1 * currentIndex);
					currentIndex += 1;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
				} else if(ticks > (testMapTiming[y]) * 60 - 5
				&& ticks - 20 <= (testMapTiming[y]) * 60){
				    score += 50 * multiplier;
				    multiplier += 0.1;
					maxScore += 300 * (1 + 0.1 * currentIndex);
					currentIndex += 1;
                    explode(y);
                    removeLetter(y);
                    doBreak = true;
				}

			container.getChildAt(2).text = ("Accuracy: " + ((score/maxScore) * 100).toFixed(2) + "%");
            container.getChildAt(4).text = "Multiplier: " + multiplier.toFixed(1);
			container.getChildAt(0).text="Score: " + score.toFixed(0);
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
		        audio.play();
				container.getChildAt(1).text = progressAtPause;
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

//Removes letter from arrays after its time is up
function display(){
    var originalLettersLength = testMapLetters.length;
    for (var j = 0; j < originalLettersLength; j++) {
        //Before hit
        if(ticks >= ((testMapTiming[j]-secToHit)*60) &&
        ticks <= (testMapTiming[j]*60)){
            stage.getChildAt((j*3)+2).visible = true; //Letter
			
            var tempBackCircle =stage.getChildAt((j*3)+1); //Background Circle
            tempBackCircle.visible = true;
			
            var tempApprCircle = stage.getChildAt((j*3)+3);//Approach Circle
            tempApprCircle.visible = true;
            tempApprCircle.alpha = 0.5;
			if(color == true && colorIt >= 10){
				tempBackCircle.filters = [colors[0]];
				tempBackCircle.updateCache();
				tempApprCircle.filters = [colors[0]];
				tempApprCircle.updateCache();
				colors.push(colors.shift());
				colorIt = 0;
			}
			else if(color == false){
				tempBackCircle.filters = [new createjs.ColorFilter(0,0,0,1,255,94,94, 0)];
				tempApprCircle.filters = [new createjs.ColorFilter(0,0,0,1,255,0,0, 0)];
				tempBackCircle.updateCache();
				tempApprCircle.updateCache();
			}
			else{
				colorIt++;
			}
            //makes circle approach to enclose back circle
            tempApprCircle.scaleX -= 0.005952;
            tempApprCircle.scaleY -= 0.005952;

            testMapObjects[j].alpha += .0075;
			
		}
		//making not visible at end of its time
        else if(ticks >= (testMapTiming[j]) * 60 &&
            ticks <= (testMapTiming[j] + secToLateHit) * 60 - 0){
            stage.getChildAt((j * 3) + 1).visible = false; //Background Circle
            stage.getChildAt((j * 3) + 2).visible = false; //Letter
            tempApprCircle = stage.getChildAt((j * 3) + 3)//Approach Circle
            tempApprCircle.visible = false;
        }

        //Miss
        else if (ticks >= (testMapTiming[j] + secToLateHit) * 60 - 0){
            removeLetter(j);
            multiplier = 1;
			maxScore += 300 * (1 + 0.1 * currentIndex);
			currentIndex += 1;
            container.getChildAt(4).text = "Multiplier: " + multiplier.toFixed(1);
			container.getChildAt(2).text = ("Accuracy: " + ((score/maxScore) * 100).toFixed(2) + "%");
            j--;
            originalLettersLength--;
        }
    }
}

function removeLetter(index){
    stage.removeChild(stage.getChildAt(index * 3 + 1));
    stage.removeChild(stage.getChildAt(index * 3 + 1));
    stage.removeChild(stage.getChildAt(index * 3 + 1));
    testMapLetters.splice(index, 1);
    testMapTiming.splice(index, 1);
    testMapObjects.splice(index, 1);
}

function explode(index){
    var explodeOnHit = new createjs.Sprite(explosionSheet, explode);
    explodeOnHit.alpha = .5;
    explodeOnHit.x = testMapObjects[index].x - 20;
    explodeOnHit.y = testMapObjects[index].y - 20;
    container.addChild(explodeOnHit);
    setTimeout(function(){container.removeChild(explodeOnHit);}, 416);
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

function colorful(){
	color = !color;
}
	
	
	