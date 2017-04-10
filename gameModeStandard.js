
var standardHighScore = 0;
	
function launchStandardMode(map) {

    //reset stage?
    
    stage.removeAllChildren();
    ticks = 0;
    
    //score stuff
    score = new Score(map);
    stage.addChild(score.scoreContainer);
    
	var song = map.song;
	var mapContainer = new createjs.Container();
	
    
    //ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleStandardTick);

	//start song
	song.load();
	song.play();
	song.volume = 0.5;
	
	
}


function standardDisplay(){
    var firstLetter = selectedMap.currentLetterIndex
    for (var j = firstLetter; j < firstLetter + 3; j++) {
        //Before hit
        if(ticks >= ((selectedMap.timing[j]-secToHit)*60) &&
        ticks <= (selectedMap.timing[j]*60)){
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

