var testMapLetters = ["t", "y", "p", "e", "r"];
var testMapTiming = [3, 3.5, 4, 4.5, 5];
var letter1 = new createjs.Text(testMapLetters[0], "20px Arial", "#000000");
		letter1.x = 50;
		letter1.y = 50;
        letter1.alpha = .1;
        letter1.visible = false;
var letter2 = new createjs.Text(testMapLetters[1], "20px Arial", "#000000");
		letter2.x = 80;
		letter2.y = 50;
        letter2.alpha = .1;
        letter2.visible = false;
var letter3 = new createjs.Text(testMapLetters[2], "20px Arial", "#000000");
		letter3.x = 110;
		letter3.y = 50;
        letter3.visible = false;
var letter4 = new createjs.Text(testMapLetters[3], "20px Arial", "#000000");
		letter4.x = 140;
		letter4.y = 50;
        letter4.visible = true;
var letter5 = new createjs.Text(testMapLetters[4], "20px Arial", "#000000");
        letter5.x = 170;
        letter5.y = 50;
        letter5.visible = true;
        
var testMapObjects = [letter1, letter2, letter3, letter4, letter5];
