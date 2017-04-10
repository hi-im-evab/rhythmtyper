
var standardHighScore = 0;

// Circles to clone
var g = new createjs.Graphics().setStrokeStyle(3).beginStroke("red").drawCircle(0,0,70);
apprCircle = new createjs.Shape(g);
apprCircle.visible = true;

g = new createjs.Graphics().beginFill("#ff5e5e").drawCircle(0,0,20);
backCircle = new createjs.Shape(g);
backCircle.visible = true;

var standardMapObjects;

function launchStandardMode(map) {
    //reset stuff?
    standardMapObjects = new createjs.Container();
    map.resetMap();
    //stage.removeAllChildren();
    //createjs.Ticker.reset();
    ticks = 0;
    
    
    for(var i = 0; i < map.totalLetters; i++){
        //array containing the text object and circles for the letter
        var gameObject = new createjs.Container();
        
        //mapTextObject is the letter's displayable object
        var mapTextObject = map.textObjects[i];
        
        //make the circles
        var backCircleClone = backCircle.clone();
        backCircleClone.x = map.lettersXY[i][0] + mapTextObject.getMeasuredWidth()/2;
        backCircleClone.y = map.lettersXY[i][1] + mapTextObject.getMeasuredHeight()/2;
		backCircleClone.cache(-22, -22,  44, 44);
        
        var apprCircleClone = apprCircle.clone();
        apprCircleClone.x = map.lettersXY[i][0] + mapTextObject.getMeasuredWidth()/2;
        apprCircleClone.y = map.lettersXY[i][1] + mapTextObject.getMeasuredHeight()/2;
		apprCircleClone.cache(-72, -72,  144, 144);
        
        //add circles and text object to container
        gameObject.addChild(backCircleClone);
        gameObject.addChild(apprCircleClone);
        gameObject.addChild(mapTextObject);
        gameObject.visible = false;
        
        //add gameObject container to standardMapObjects
        standardMapObjects.addChild(gameObject);
    }
    stage.addChild(standardMapObjects);
    //score stuff
    score = new Score(map);
    stage.addChild(score.scoreContainer);
    
	var song = map.song;
    
	//start song
	song.load();
	song.play();
	song.volume = 0.5;
    
    //ticker
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", handleStandardTick);
    
	
	
}


function standardDisplay(){
    var currentLetter = selectedMap.currentLetterIndex;
    for (var j = currentLetter; j < selectedMap.totalLetters; j++) {
        var currentObject = standardMapObjects.getChildAt(j);
        
        var tempBackCircle =currentObject.getChildAt(0);//Background Circle
        var tempApprCircle = currentObject.getChildAt(1);//Approach Circle
        var tempLetter = currentObject.getChildAt(2); //Letter
        
        //Before hit
        if(ticks >= ((selectedMap.timing[j]-secToHit)*60) &&
        ticks <= (selectedMap.timing[j]*60)){
            standardMapObjects.getChildAt(j).visible = true; //Letter
			 
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

            tempLetter.alpha += .0075;
			
		}
		//making not visible at end of its time
        else if(ticks >= (selectedMap.timing[j]) * 60 &&
            ticks <= (selectedMap.timing[j] + secToLateHit) * 60 - 0){
            standardMapObjects.getChildAt(j).visible = false;
        }

        //Miss
        else if (ticks >= (selectedMap.timing[j] + secToLateHit) * 60 - 0){
            //removeLetter(j);
            currentMultiplier = 1;
			selectedMap.currentLetterIndex += 1;
            // container.getChildAt(4).text = "Multiplier: " + multiplier.toFixed(1);
			// container.getChildAt(2).text = ("Accuracy: " + ((score/maxScore) * 100).toFixed(2) + "%");
            // j--;
            // originalLettersLength--;
        }
    }

