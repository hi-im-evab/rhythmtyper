
var color = false;
var colors = [new createjs.ColorFilter(0,0,0,1,0,255,0, 0), new createjs.ColorFilter(0,0,0,1,255,0,0, 0), new createjs.ColorFilter(0,0,0,1,0,0,255, 0)];
var colorIt = 0;

var explosion = {
    framerate: 60,
    images:["assets/explosion.png"],
	frames:{width:64, height:64, count: 25},
	animations:{
		explode: [0, 24, 25, 0.5]
    }
}
var explosionSheet = new createjs.SpriteSheet(explosion);

function explode(index){
    var explodeOnHit = new createjs.Sprite(explosionSheet, explode);
    explodeOnHit.alpha = .5;
    explodeOnHit.x = testMapObjects[index].x - 20;
    explodeOnHit.y = testMapObjects[index].y - 20;
    container.addChild(explodeOnHit);
    setTimeout(function(){container.removeChild(explodeOnHit);}, 416);
}

function colorful(){
	color = !color;
}
	