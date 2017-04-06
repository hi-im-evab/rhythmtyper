
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
// MOST OF SCORE IS IN HERE
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
