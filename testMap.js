var testMapLetters = ["a", "b", "f"];
var testMapTiming = [5, 10, 15];
var letter1 = new createjs.Text(testMapLetters[0], "20px Arial", "#000000");
		letter1.x = 50;
		letter1.y = 50;
        letter1.alpha = .1;
        letter1.visible = false;
var letter2 = new createjs.Text(testMapLetters[1], "20px Arial", "#000000");
		letter2.x = 70;
		letter2.y = 50;
        letter2.alpha = .1;
        letter2.visible = false;
var letter3 = new createjs.Text(testMapLetters[2], "20px Arial", "#000000");
		letter3.x = 90;
		letter3.y = 50;
        letter3.visible = false;
        
var testMapObjects = [letter1, letter2, letter3];