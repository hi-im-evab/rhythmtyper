
var multiplierValue = 0.1;
var currentMultiplier = 1; //set to 1 initially

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
		this.highScoreDisplay.x = 275;
		this.highScoreDisplay.y = 335;
		this.scoreContainer.addChild(this.highScoreDisplay);
		
		//multDisplay
		this.multDisplay = new createjs.Text("Multiplier: " + currentMultiplier.toFixed(1), "20px Arial", "#000000");
		this.multDisplay.textAlign = "right";
		this.multDisplay.x = 600;
		this.multDisplay.y = 335;
		this.scoreContainer.addChild(this.multDisplay);
		
        this.maxMultiplier = 1;
        this.maxScore = 0;
		//updates score, progress, accuracy, multiplier, and high score display
		this.updateScore = function(){
                                if(this.score > standardHighScore){
                                    standardHighScore = this.score;
                                }
								this.scoreDisplay.text = ("Score: " + this.score.toFixed(0));
                                
                                if(this.progress < 100){
                                    this.progress = ((ticks / map.songDuration) * 100).toFixed(1);
                                    this.progressDisplay.text = ("Progress:" + this.progress + "%");
                                }
                                else{
                                    this.progressDisplay.text = ("Progress: 100.0%");
                                }
                                
                                if(this.maxScore != 0){
                                    this.accuracyDisplay.text = ("Accuracy: " + (((this.score/this.maxScore * 100).toFixed(2) + "%")));
                                }
                                else{
                                    this.accuracyDisplay.text = ("Accuracy: " + (("100.0%")));
                                }
								this.highScoreDisplay.text = ("High Score: " + standardHighScore.toFixed(0));
								this.multDisplay.text = ("Multiplier: " + currentMultiplier.toFixed(1));
							}
               
        this.updateMaxScore = function(){
                                    this.maxScore += 300 * (this.maxMultiplier);
                            }
        this.addScore = function(value){
                                this.score += value;
                        }
	}
	
	window.Score = Score;
}());
