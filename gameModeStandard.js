
function launchStandardMode(map) {
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
