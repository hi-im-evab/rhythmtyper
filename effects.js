
var color = false;
var colors = [new createjs.ColorFilter(0,0,0,1,0,255,0, 0), new createjs.ColorFilter(0,0,0,1,255,0,0, 0), new createjs.ColorFilter(0,0,0,1,0,0,255, 0)];
var colorIt = 0;

var speedDisplay

//Scaling Stuff
var circleScale = 0.005952;
var ticksScale = 1;
var speed = 1.0;

var explosion = {
    framerate: 60,
    images:["assets/explosion.png"],
	frames:{width:64, height:64, count: 25},
	animations:{
		// explode: [0, 24, 25, 0.5]
        // next: false
        "explode":{
                frames:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
                next: false
                // speed: 0.5
                }
    }
}
var explosionSheet = new createjs.SpriteSheet(explosion);

function explode(letterContainer){
    var x = letterContainer.getChildAt(0).x;
    var y = letterContainer.getChildAt(0).y;
    var explodeOnHit = new createjs.Sprite(explosionSheet, 'explode');
    explodeOnHit.alpha = .5;
    explodeOnHit.x = x - 30;
    explodeOnHit.y = y - 30;
    stage.addChildAt(explodeOnHit, 0);
    setTimeout(function(){stage.removeChild(explodeOnHit);}, 1000);
}

function resetEffects(){
    circleScale = 0.005952;
    ticksScale = 1;
    speed = 1.0;
    color = false;
}
function colorful(){
	color = !color;
}

function faster(){
    selectedMap.song.playbackRate += 0.1;
    var playback = selectedMap.song.playbackRate;
    speed = playback;
    circleScale = 0.005952 * playback;
    ticksScale =  1 * playback;
    multiplierValue = 0.1 * playback;
    speedDisplay.text = ("Speed: " + playback.toFixed(1));
}

function slower(){
    var playback = selectedMap.song.playbackRate;
    if(playback >= 0.1){
        selectedMap.song.paused = false;
        selectedMap.song.playbackRate -= 0.1;
        playback -= 0.1;
        circleScale = 0.005952 * playback;
        ticksScale =  1 * playback;
        multiplierValue = 0.1 * playback;
        speed = playback;
		speedDisplay.text = ("Speed: " + playback.toFixed(1));
    }
    else{
		speedDisplay.text = ("Speed: 0.0");
        selectedMap.song.paused = true;
        speed = 0;
        selectedMap.song.playbackRate = 0;
        circleScale = 0;
        ticksScale =  0;
        multiplierValue = 0;
    }
}

speedDisplay = new createjs.Text("Speed: 1.0", "16px Arial", "red");
speedDisplay.textAlign = "left";
speedDisplay.x = 5;
speedDisplay.y = 5;