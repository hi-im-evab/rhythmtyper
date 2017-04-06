(function(){
	
	function Score(map){
		//variables
		this.score = 0;
		this.progress = 0;
		this.scoreContainer = new createjs.Container();
		
		//scoreDisplay
		this.scoreDisplay = new createjs.Text("Score: " + this.score, "20px Arial", "#000000");
		this.scoreDisplay.textAlign = "left";
		this.scoreDisplay.x = 5;
		this.scoreDisplay.y = 335;
		this.scoreContainer.addChild(scoreDisplay);
		
		//progressDisplay
		this.progressDisplay = new createjs.Text("Progress:" + this.progress + "%", "16px Arial", "red");
		this.progressDisplay.textAlign = "right";
		this.progressDisplay.x = 635;
		this.progressDisplay.y = 5;
		this.scoreContainer.addChild(progressDisplay);
		
		//accuracyDisplay
		this.accuracyDisplay = new createjs.Text("Accuracy: 0%", "16px Arial", "red");
		this.accuracyDisplay.textAlign = "right";
		this.accuracyDisplay.x = 635;
		this.accuracyDisplay.y = 25;
		this.scoreContainer.addChild(accuracyDisplay);
		
		
		//highScoreDisplay
		this.highScoreDisplay = new createjs.Text("High Score: " + standardHighScore.toFixed(0), "20px Arial", "#000000");
		this.highScoreDisplay.textAlign = "center";
		this.highScoreDisplay.x = 225;
		this.highScoreDisplay.y = 335;
		this.scoreContainer.addChild(highScoreDisplay);
		
		//multDisplay
		this.multDisplay = new createjs.Text("Multiplier: " + currentMultiplier.toFixed(1), "20px Arial", "#000000");
		this.multDisplay.textAlign = "right";
		this.multDisplay.x = 600;
		this.multDisplay.y = 335;
		this.scoreContainer.addChild(multDisplay);
		
		//methods
		
		//updates score, progress, accuracy, and high score display
		this.updateScore = function(){//CHECK LATER
								var maxScore = 0;
								for(var i = 0; i < map.currentLetterIndex; i++;){
									maxScore += 300 * (1 + multiplier * map.currentLetterIndex);
								}
								this.scoreDisplay.text = ("Score: " + this.score, "20px Arial", "#000000");
								this.progressDisplay.text = ("Progress:" + ((ticks / map.songDuration) * 100 * 2).toFixed(1) + "%", "16px Arial", "red");
								this.accuracyDisplay.text = ("Accuracy: " + ((this.score/maxScore * 100).toFixed(2) + "%");
								this.highScoreDisplay.text = ("High Score: " + standardHighScore.toFixed(0), "20px Arial", "#000000");
								this.multDisplay.text = ("Multiplier: " + currentMultiplier.toFixed(1), "20px Arial", "#000000");
							}
	}
	
	window.Score = Score;
}());

	var score;
	var progress;
	var scoreDisplay;
	var progressDisplay;
function updateScore(){
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
		
		if (score > highScore) {
		    highScore = score;
		    container.getChildAt(3).text = ("High Score: " + highScore.toFixed(0));
		}
}