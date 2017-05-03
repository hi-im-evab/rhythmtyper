//Any song can be added as long as it follows this format, all of it should be self explanatory
var song2HighScore = 0;

(function () {
    function Song2() {

        this.song = document.getElementById("song2Track");
        this.songDuration = this.song.duration * 60; //value in ticks
        this.currentLetterIndex = 0;

        this.letters = ["b", "a", "s", "s", "w", "u", "b",
						"z", "x", "c", "v",
						"b", "l", "a", "s", "t", "i", "n",
						"s", "u", "b", "u", "i", "o", "p",

						"b", "a", "s", "s", "w", "u", "b",
						"z", "x", "c", "v",
						"e", "l", "e", "c", "t", "r", "o",
						"s", "u", "b",

                        "t", "r", "i", "t", "e", "m", "p", "o",
						"z", "x", "c", "v",
						"b", "l", "a", "s", "t", "i", "n",
						"s", "u", "b", "a", "s", "d", "f",

                        "b", "a", "s", "s", "w", "u", "b",
						"z", "x", "c", "v",
						"b", "l", "a", "s", "t", "i", "n",
						"w", "u", "b", "s"
                        ];

        this.totalLetters = this.letters.length; //94

        this.timing = [2, 2.25, 2.5, 2.75, 3, 3.25, 3.5,
						4, 4.5, 5, 5.5,
						6, 6.25, 6.5, 6.75, 7, 7.25, 7.5,
						8, 8.5, 9, 9.5, 9.625, 9.75, 9.875,

						10, 10.25, 10.5, 10.75, 11, 11.25, 11.5,
						12, 12.5, 13, 13.5,
						14, 14.25, 14.5, 14.75, 15, 15.25, 15.5,
						16, 16.5, 17,

                        18, 18.1667, 18.3333, 18.5, 18.75, 19, 19.25, 19.5,
						20, 20.5, 21, 21.5,
						22, 22.25, 22.5, 22.75, 23, 23.25, 23.5,
						24, 24.5, 25, 25.5, 25.625, 25.75, 25.875,

                        26, 26.25, 26.5, 26.75, 27, 27.25, 27.5,
						28, 28.5, 29, 29.5,
						30, 30.25, 30.5, 30.75, 31, 31.25, 31.5,
						32, 32.5, 33, 33.5
                        ];

        this.lettersXY = [[100, 100], [130, 100], [160, 100], [190, 100], [220, 100], [250, 100], [280, 100],
                        [400, 300], [430, 270], [460, 240], [490, 210],
                        [200, 100], [230, 130], [200, 160], [230, 190], [200, 220], [230, 250], [200, 280],
                        [300, 100], [330, 100], [360, 100], [240, 250], [270, 280], [300, 250], [330, 280],

                        [100, 200], [130, 200], [160, 200], [190, 200], [220, 200], [250, 200], [280, 200],
                        [400, 300], [430, 270], [460, 240], [490, 210],
                        [200, 100], [230, 130], [200, 160], [230, 190], [200, 220], [230, 250], [200, 280],
                        [270, 180], [320, 180], [370, 180],

                        [80, 200], [100, 220], [120, 240], [160, 260], [190, 260], [220, 260], [250, 260], [280, 260],
                        [400, 300], [430, 270], [460, 240], [490, 210],
                        [200, 100], [230, 130], [200, 160], [230, 190], [200, 220], [230, 250], [200, 280],
                        [300, 100], [330, 100], [360, 100], [240, 250], [270, 280], [300, 250], [330, 280],

                        [100, 100], [130, 100], [160, 100], [190, 100], [220, 100], [250, 100], [280, 100],
                        [400, 300], [430, 270], [460, 240], [490, 210],
                        [200, 100], [230, 130], [200, 160], [230, 190], [200, 220], [230, 250], [200, 280],
                        [200, 100], [230, 100], [260, 100], [290, 100]
                        ];

        this.textObjects = [];//the createjs.Text objects for the letters

        //adds text objects
        for (var i = 0; i < this.lettersXY.length; i++) {
            var letter = new createjs.Text(this.letters[i], "20px Arial", "#000000");
            letter.x = this.lettersXY[i][0]; letter.y = this.lettersXY[i][1]; letter.alpha = .1; letter.visible = true;

            this.textObjects[i] = letter;
        }
        
        //resets map
        this.resetMap = function () {
            currentLetterIndex = 0;
            this.textObjects = [];
            for (var i = 0; i < this.lettersXY.length; i++) {
                var letter = new createjs.Text(this.letters[i], "20px Arial", "#000000");
                letter.x = this.lettersXY[i][0]; letter.y = this.lettersXY[i][1]; letter.alpha = .1; letter.visible = true;

                this.textObjects[i] = letter;
            }
        }
        
        this.highScore = song2HighScore;
        
        this.setHighScore = function(score){
                                if(score > this.highScore){
                                    this.highScore = score;
                                    song2HighScore = score;
                                }
        }
    }

    window.Song2 = Song2;
}());