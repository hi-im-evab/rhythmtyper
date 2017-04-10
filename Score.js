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
		this.scoreContainer.addChild(this.scoreDisplay);
		
		//progressDisplay
		this.progressDisplay = new createjs.Text("Progress:" + this.progress + "%", "16px Arial", "red");
		this.progressDisplay.textAlign = "right";
		this.progressDisplay.x = 635;
		this.progressDisplay.y = 5;
		this.scoreContainer.addChild(this.progressDisplay);
		
		//accuracyDisplay
		this.accuracyDisplay = new createjs.Text("Accuracy: 0%", "16px Arial", "red");
		this.accuracyDisplay.textAlign = "right";
		this.accuracyDisplay.x = 635;
		this.accuracyDisplay.y = 25;
		this.scoreContainer.addChild(this.accuracyDisplay);
		
		
		//highScoreDisplay
		this.highScoreDisplay = new createjs.Text("High Score: " + standardHighScore.toFixed(0), "20px Arial", "#000000");
		this.highScoreDisplay.textAlign = "center";
		this.highScoreDisplay.x = 225;
		this.highScoreDisplay.y = 335;
		this.scoreContainer.addChild(this.highScoreDisplay);
		
		//multDisplay
		this.multDisplay = new createjs.Text("Multiplier: " + currentMultiplier.toFixed(1), "20px Arial", "#000000");
		this.multDisplay.textAlign = "right";
		this.multDisplay.x = 600;
		this.multDisplay.y = 335;
		this.scoreContainer.addChild(this.multDisplay);
		
		//methods
		
		//updates score, progress, accuracy, and high score display
		this.updateScore = function(){
								var maxScore = 0;
								for(var i = 0; i < map.currentLetterIndex; i++){
									maxScore += 300 * (1 + multiplierValue * map.currentLetterIndex);
								}
								this.scoreDisplay.text = ("Score: " + this.score);
                                if(this.progress < 100){
                                    this.progress = ((ticks / map.songDuration) * 100).toFixed(1);
                                    this.progressDisplay.text = ("Progress:" + this.progress + "%");
                                }
                                else{
                                    this.progressDisplay.text = ("Progress: 100.0%");
                                }
								this.accuracyDisplay.text = ("Accuracy: " + ((this.score/maxScore * 100).toFixed(2) + "%"));
								this.highScoreDisplay.text = ("High Score: " + standardHighScore.toFixed(0));
								this.multDisplay.text = ("Multiplier: " + currentMultiplier.toFixed(1));
							}
	}
	
	window.Score = Score;
}());
