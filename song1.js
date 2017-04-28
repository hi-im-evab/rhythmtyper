(function(){
    function Song1() {
        
        this.song = document.getElementById("song1Track");
		this.songDuration = this.song.duration * 60; //value in ticks
        this.currentLetterIndex = 0;
        
        this.letters = ["t", "y", "p", "e", "r", 
						"a", "s", "d", "f",
						"j", "a", "c", "o", "b",
						"e", "v", "a", "n", "e", "v", "a", "n",
						"a", "p", "p", "l", "e",
						"m", "u", "s", "i", "c",
						"s", "w", "e", "a", "t", "e", "r", "s",
						"y", "o", "t", "h", "a", "n", "k", "y", "o", "u",
						"q"];
                        
        this.totalLetters = this.letters.length; //51
                        
        this.timing = [2, 2.5, 3, 3.25, 3.5, 
						4, 4.5, 5, 5.5,
						6, 6.5, 7, 7.25, 7.5,
						8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75,
						10, 10.5, 11, 11.25, 11.5,
						12, 12.5, 13, 13.25, 13.5,
						14, 14.25, 14.5, 14.75, 15, 15.25, 15.5, 15.75,
						16, 16.25, 16.5, 16.75, 17, 17.25, 17.5, 17.625, 17.75, 17.875,
						18];
                        
        this.lettersXY = [[50,50],[80,50],[110,50],[140,50],[170,50],
                        [100,100],[120,130],[160,130],[180,160],
                        [200,100],[230,130],[200,160],[230,190],[260,220],
                        [300,100],[330,130],[300,160],[330,190],[300,200],[330,230],[300,260],[330,290],
                        [50,100],[80,130],[110,160],[140,190],[170,220],
                        [100,100],[120,130],[160,130],[180,160],[200,160],
                        [290,210],[320,210],[350,210],[380,210],[410,210],[440,210],[470,210],[500,210],
                        [40,40],[70,70],[100,100],[130,130],[160,160],[190,190],[220,220],[250,250],[280,280],[310,310],
                        [350,310]];
                        
        this.textObjects = [];//the createjs.Text objects for the letters
        
        
        for(var i = 0; i < this.lettersXY.length; i++){
            var letter = new createjs.Text(this.letters[i], "20px Arial", "#000000");
            letter.x = this.lettersXY[i][0]; letter.y = this.lettersXY[i][1]; letter.alpha = .1; letter.visible = true;
            
            this.textObjects[i] = letter;
        }
        this.resetMap = function(){
                            currentLetterIndex = 0;
                            this.textObjects = [];
                            for(var i = 0; i < this.lettersXY.length; i++){
                                var letter = new createjs.Text(this.letters[i], "20px Arial", "#000000");
                                letter.x = this.lettersXY[i][0]; letter.y = this.lettersXY[i][1]; letter.alpha = .1; letter.visible = true;
            
                                this.textObjects[i] = letter;
                            }
                        }
    }

window.Song1 = Song1;
}());