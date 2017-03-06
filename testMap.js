// Each letter is hardcoded in
// We'll make a map editor later (never)

var testMapLetters = ["t", "y", "p", "e", "r", 
						"a", "s", "d", "f",
						"j", "a", "c", "o", "b",
						"e", "v", "a", "n", "e", "v", "a", "n",
						"a", "p", "p", "l", "e",
						"m", "u", "s", "i", "c",
						"s", "w", "e", "a", "t", "e", "r", "s"];
var testMapTiming = [2, 2.5, 3, 3.25, 3.5, 
						4, 4.5, 5, 5.5,
						6, 6.5, 7, 7.25, 7.5,
						8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75,
						10, 10.5, 11, 11.25, 11.5,
						12, 12.5, 13, 13.25, 13.5,
						14, 14.25, 14.5, 14.75, 15, 15.25, 15.5, 15.75]; //appears two seconds before given second
/* Measure 1 */ //1 2 3 and 4 //typer
var letter1 = new createjs.Text(testMapLetters[0], "20px Arial", "#000000");
		letter1.x = 50; letter1.y = 50; letter1.alpha = .1; letter1.visible = false;
var letter2 = new createjs.Text(testMapLetters[1], "20px Arial", "#000000");
		letter2.x = 80; letter2.y = 50; letter2.alpha = .1; letter2.visible = false;
var letter3 = new createjs.Text(testMapLetters[2], "20px Arial", "#000000");
		letter3.x = 110; letter3.y = 50; letter3.alpha = .1; letter3.visible = false;
var letter4 = new createjs.Text(testMapLetters[3], "20px Arial", "#000000");
		letter4.x = 140; letter4.y = 50; letter4.alpha = .1; letter4.visible = false;
var letter5 = new createjs.Text(testMapLetters[4], "20px Arial", "#000000");
        letter5.x = 170; letter5.y = 50; letter5.alpha = .1; letter5.visible = false;

/* Measure 2 */ //1 2 3 4 //asdf
var letter6 = new createjs.Text(testMapLetters[5], "20px Arial", "#000000");
		letter6.x = 100; letter6.y = 100; letter6.alpha = .1; letter6.visible = false;
var letter7 = new createjs.Text(testMapLetters[6], "20px Arial", "#000000");
		letter7.x = 120; letter7.y = 130; letter7.alpha = .1; letter7.visible = false;
var letter8 = new createjs.Text(testMapLetters[7], "20px Arial", "#000000");
		letter8.x = 160; letter8.y = 130; letter8.alpha = .1; letter8.visible = false;
var letter9 = new createjs.Text(testMapLetters[8], "20px Arial", "#000000");
		letter9.x = 180; letter9.y = 160; letter9.alpha = .1; letter9.visible = false;
  
/* Measure 3 */ //1 2 3 and 4 //jacob
var letter10 = new createjs.Text(testMapLetters[9], "20px Arial", "#000000");
		letter10.x = 200; letter10.y = 100; letter10.alpha = .1; letter10.visible = false;
var letter11 = new createjs.Text(testMapLetters[10], "20px Arial", "#000000");
		letter11.x = 230; letter11.y = 130; letter11.alpha = .1; letter11.visible = false;
var letter12 = new createjs.Text(testMapLetters[11], "20px Arial", "#000000");
		letter12.x = 200; letter12.y = 160; letter12.alpha = .1; letter12.visible = false;
var letter13 = new createjs.Text(testMapLetters[12], "20px Arial", "#000000");
		letter13.x = 230; letter13.y = 190; letter13.alpha = .1; letter13.visible = false;
var letter14 = new createjs.Text(testMapLetters[13], "20px Arial", "#000000");
		letter14.x = 260; letter14.y = 220; letter14.alpha = .1; letter14.visible = false;

/* Measure 4 */ // 1 and 2 and 3 and 4 and //evan evan
var letter15 = new createjs.Text(testMapLetters[14], "20px Arial", "#000000");
		letter15.x = 300; letter15.y = 100; letter15.alpha = .1; letter15.visible = false;
var letter16 = new createjs.Text(testMapLetters[15], "20px Arial", "#000000");
		letter16.x = 330; letter16.y = 130; letter16.alpha = .1; letter16.visible = false;
var letter17 = new createjs.Text(testMapLetters[16], "20px Arial", "#000000");
		letter17.x = 300; letter17.y = 160; letter17.alpha = .1; letter17.visible = false;
var letter18 = new createjs.Text(testMapLetters[17], "20px Arial", "#000000");
		letter18.x = 330; letter18.y = 190; letter18.alpha = .1; letter18.visible = false;
var letter19 = new createjs.Text(testMapLetters[18], "20px Arial", "#000000");
		letter19.x = 300; letter19.y = 200; letter19.alpha = .1; letter19.visible = false;
var letter20 = new createjs.Text(testMapLetters[19], "20px Arial", "#000000");
		letter20.x = 330; letter20.y = 230; letter20.alpha = .1; letter20.visible = false;
var letter21 = new createjs.Text(testMapLetters[20], "20px Arial", "#000000");
		letter21.x = 300; letter21.y = 260; letter21.alpha = .1; letter21.visible = false;
var letter22 = new createjs.Text(testMapLetters[21], "20px Arial", "#000000");
		letter22.x = 330; letter22.y = 290; letter22.alpha = .1; letter22.visible = false;
		
/* Measure 5 */ //1 2 3 and 4 //apple
var letter23 = new createjs.Text(testMapLetters[22], "20px Arial", "#000000");
		letter23.x = 50; letter23.y = 100; letter23.alpha = .1; letter23.visible = false;
var letter24 = new createjs.Text(testMapLetters[23], "20px Arial", "#000000");
		letter24.x = 80; letter24.y = 130; letter24.alpha = .1; letter24.visible = false;
var letter25 = new createjs.Text(testMapLetters[24], "20px Arial", "#000000");
		letter25.x = 110; letter25.y = 160; letter25.alpha = .1; letter25.visible = false;
var letter26 = new createjs.Text(testMapLetters[25], "20px Arial", "#000000");
		letter26.x = 140; letter26.y = 190; letter26.alpha = .1; letter26.visible = false;
var letter27 = new createjs.Text(testMapLetters[26], "20px Arial", "#000000");
		letter27.x = 170; letter27.y = 220; letter27.alpha = .1; letter27.visible = false;
		
/* Measure 6 */ //1 2 3 and 4 //music
var letter28 = new createjs.Text(testMapLetters[27], "20px Arial", "#000000");
		letter28.x = 100; letter28.y = 100; letter28.alpha = .1; letter28.visible = false;
var letter29 = new createjs.Text(testMapLetters[28], "20px Arial", "#000000");
		letter29.x = 120; letter29.y = 130; letter29.alpha = .1; letter29.visible = false;
var letter30 = new createjs.Text(testMapLetters[29], "20px Arial", "#000000");
		letter30.x = 160; letter30.y = 130; letter30.alpha = .1; letter30.visible = false;
var letter31 = new createjs.Text(testMapLetters[30], "20px Arial", "#000000");
		letter31.x = 180; letter31.y = 160; letter31.alpha = .1; letter31.visible = false;
var letter32 = new createjs.Text(testMapLetters[31], "20px Arial", "#000000");
		letter32.x = 200; letter32.y = 160; letter32.alpha = .1; letter32.visible = false;
		
/* Measure 7 */ //sweaters
var letter33 = new createjs.Text(testMapLetters[32], "20px Arial", "#000000");
		letter33.x = 290; letter33.y = 210; letter33.alpha = .1; letter33.visible = false;
var letter34 = new createjs.Text(testMapLetters[33], "20px Arial", "#000000");
		letter34.x = 320; letter34.y = 210; letter34.alpha = .1; letter34.visible = false;
var letter35 = new createjs.Text(testMapLetters[34], "20px Arial", "#000000");
		letter35.x = 350; letter35.y = 210; letter35.alpha = .1; letter35.visible = false;
var letter36 = new createjs.Text(testMapLetters[35], "20px Arial", "#000000");
		letter36.x = 380; letter36.y = 210; letter36.alpha = .1; letter36.visible = false;
var letter37 = new createjs.Text(testMapLetters[36], "20px Arial", "#000000");
		letter37.x = 410; letter37.y = 210; letter37.alpha = .1; letter37.visible = false;
var letter38 = new createjs.Text(testMapLetters[37], "20px Arial", "#000000");
		letter38.x = 440; letter38.y = 210; letter38.alpha = .1; letter38.visible = false;
var letter39 = new createjs.Text(testMapLetters[38], "20px Arial", "#000000");
		letter39.x = 470; letter39.y = 210; letter39.alpha = .1; letter39.visible = false;
var letter40 = new createjs.Text(testMapLetters[39], "20px Arial", "#000000");
		letter40.x = 500; letter40.y = 210; letter40.alpha = .1; letter40.visible = false;

/* Measure 8 */

/* Measure 9 */

/* Measure 10 */

/* Measure 11 */

/* Measure 12 */

/* Measure 13 */

/* Measure 14 */

/* Measure 15 */
		
var testMapObjects = [letter1, letter2, letter3, letter4, letter5, 
						letter6, letter7, letter8, letter9,
						letter10, letter11, letter12, letter13, letter14,
						letter15, letter16, letter17, letter18, letter19, letter20, letter21, letter22,
						letter23, letter24, letter25, letter26, letter27,
						letter28, letter29, letter30, letter31, letter32,
						letter33, letter34, letter35, letter36, letter37, letter38, letter39, letter40];
