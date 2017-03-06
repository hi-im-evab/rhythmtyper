// Each letter is hardcoded in
// We'll make a map editor later (never)

var testMapLetters = ["t", "y", "p", "e", "r", 
						"a", "s", "d", "f",
						"j", "a", "c", "o", "b"];
var testMapTiming = [2, 2.5, 3, 3.25, 3.5, 
						4, 4.5, 5, 5.5
						]; //appears two seconds before given second
/* Measure 1 */
//sec 2, beat 1
var letter1 = new createjs.Text(testMapLetters[0], "20px Arial", "#000000");
		letter1.x = 50; letter1.y = 50; letter1.alpha = .1; letter1.visible = false;
//sec 2.5, beat 2
var letter2 = new createjs.Text(testMapLetters[1], "20px Arial", "#000000");
		letter2.x = 80; letter2.y = 50; letter2.alpha = .1; letter2.visible = false;
//sec 3, beat 3
var letter3 = new createjs.Text(testMapLetters[2], "20px Arial", "#000000");
		letter3.x = 110; letter3.y = 50; letter3.alpha = .1; letter3.visible = false;
//sec 3.25, beat 3.5
var letter4 = new createjs.Text(testMapLetters[3], "20px Arial", "#000000");
		letter4.x = 140; letter4.y = 50; letter4.alpha = .1; letter4.visible = false;
//sec 3.5
var letter5 = new createjs.Text(testMapLetters[4], "20px Arial", "#000000");
        letter5.x = 170; letter5.y = 50; letter5.alpha = .1; letter5.visible = false;

/* Measure 2 */
var letter6 = new createjs.Text(testMapLetters[5], "20px Arial", "#000000");
		letter6.x = 100; letter6.y = 100; letter6.alpha = .1; letter6.visible = false;
var letter7 = new createjs.Text(testMapLetters[6], "20px Arial", "#000000");
		letter7.x = 120; letter7.y = 130; letter7.alpha = .1; letter7.visible = false;
var letter8 = new createjs.Text(testMapLetters[7], "20px Arial", "#000000");
		letter8.x = 160; letter8.y = 130; letter8.alpha = .1; letter8.visible = false;
var letter9 = new createjs.Text(testMapLetters[8], "20px Arial", "#000000");
		letter9.x = 180; letter9.y = 160; letter9.alpha = .1; letter9.visible = false;
  
/* Measure 3 */
var letter10 = new createjs.Text(testMapLetters[9], "20px Arial", "#000000");
		letter10.x = 100; letter10.y = 100; letter10.alpha = .1; letter10.visible = false;
var letter11 = new createjs.Text(testMapLetters[10], "20px Arial", "#000000");
		letter11.x = 130; letter11.y = 130; letter11.alpha = .1; letter11.visible = false;
  
var testMapObjects = [letter1, letter2, letter3, letter4, letter5, 
						letter6, letter7, letter8, letter9];
