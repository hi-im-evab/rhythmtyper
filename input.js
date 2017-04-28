
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
		    pauseMenu();
			//no check input
			//used for pause
		}
	});
}

// Check if input matches next letter
// MOST OF SCORE IS IN HERE


function checkInput(key){
    for(var y = 0; y < 3; y++){
        var currentObject = standardMapObjects.getChildAt(y);
        if (key == currentObject.letter){
            var doBreak = false;
            //variables used in determining hit
            var timing = currentObject.timing;
            
            if (ticks + 60 > (timing) * 60
				&& ticks + 35 <= (timing) * 60) {
                    letterHit(50, y)
                    doBreak = true;;
                } else if(ticks + 35 > (timing) * 60
				&& ticks + 10 <= (timing) * 60){
                    letterHit(100, y);
                    doBreak = true;
				} else if(ticks + 10 > (timing) * 60
				&& ticks - 5 <= (timing) * 60){
				    letterHit(300, y);
                    doBreak = true;
				} else if(ticks - 5> (timing) * 60
				&& ticks - 20 <= (timing) * 60){
				    letterHit(50, y);
                    doBreak = true;
				}
            if(doBreak){
                break;
            }
        }
    }
}

//function for if a letter is hit, value is the point value for the time it is hit
function letterHit(value, index){
    
                    score.addScore(value * currentMultiplier);
                    score.updateScore();
                    currentMultiplier += multiplierValue;
                    standardMapObjects.removeChildAt(index);
                    selectedMap.currentLetterIndex += 1;
                    //explode(y);
}

