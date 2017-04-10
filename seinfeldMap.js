(function(){
    function SeinfeldMap() {
        
        this.song = document.getElementById("seinfeld");
		this.songDuration = this.song.getElementById("mapTrack").duration * 60; //value in ticks
        this.totalLetters = 5;
        this.currentLetterIndex = 0;
        
        this.letters = ["o", "t", "h", "e", "r"];
                        
        this.timing = [2, 2.25, 2.5, 3, 3.5, ];
                        
        this.lettersXY = [[70,70],[100,50],[150,50],[140,100],[170,100]];
                        
        this.textObjects = [];
        
        for(var i = 0; i < this.lettersXY.length; i++){
            var letter = new createjs.Text(this.letters[0], "20px Arial", "#000000");
            letter.x = this.lettersXY[i[0]]; letter.y = this.lettersXY[i[1]]; letter.alpha = .1; letter.visible = false;
            
            this.textObjects[i] = letter;
        }       
    }

window.SeinfeldMap = SeinfeldMap;
}());