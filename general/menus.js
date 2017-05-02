
var inGame = false;
var paused = false;

var g = new createjs.Graphics();
g.setStrokeStyle(1);
g.beginStroke("#000000");
g.beginFill("black");
g.drawRect(0, 0, 640, 360);

var menuBackground = new createjs.Shape(g);//the dimmed background for all menus
menuBackground.alpha = 0.4;

function pauseMenu(){
    //resume game
    if(inGame){//only runs if in game
        if(paused){
            paused = false;
            if(ticks > 0 && !selectedMap.song.ended){
                createjs.Ticker.paused = false
                selectedMap.song.play();
            }
            resetMenu();
        }
        else{
            paused = true;
            selectedMap.song.pause();
            createjs.Ticker.paused = true;
            resetMenu();
            
            currentMenu.addChild(menuRectangle('Resume', 70, pauseMenu));
            currentMenu.addChild(menuRectangle('Restart', 120, function(){standardRestart();paused = false;}));
            currentMenu.addChild(menuRectangle('Colorful', 170, colorful));
            currentMenu.addChild(menuRectangle('Main Menu', 220, function(){mainMenu();paused = false;}));
            stage.addChild(currentMenu);
            stage.update();
        }
}
}
function mainMenu(){
    resetMenu();
    resetEffects();
    //reset things in case leaving a game
    createjs.Ticker.reset();
    createjs.Ticker.paused = true;
    currentMultiplier = 1;
    stage.removeAllChildren();
    inGame = false;
    
    
    currentMenu.addChild(menuRectangle('Standard', 70, standardSongMenu));
    currentMenu.addChild(menuRectangle('Other Mode', 120, fill));
    stage.addChild(currentMenu);
    stage.update();
}

function standardSongMenu(){
    resetMenu()
    currentMenu.addChild(menuRectangle('Song 1', 70, function(){
        selectedMapString = 'song1';
        selectMap(selectedMapString);
        launchStandardMode(selectedMap);
        
        selectedMap.song.pause();
        createjs.Ticker.paused = true;
        inGame = true;
        stage.update();
        
        setTimeout(function(){
            if(!paused && inGame){
                createjs.Ticker.paused = false;
                selectedMap.song.play();
            }
        }, 3000);
    }));
    currentMenu.addChild(menuRectangle('Song 2', 120, function(){
        selectedMapString = 'song2';
        selectMap(selectedMapString);
        launchStandardMode(selectedMap);
        
        selectedMap.song.pause();
        createjs.Ticker.paused = true;
        inGame = true;
        stage.update();
        
        setTimeout(function(){
            if(!paused && inGame){
                createjs.Ticker.paused = false;
                selectedMap.song.play();
            }
        }, 3000);
    }));
    stage.addChild(currentMenu);
    stage.update();
}

//function to return a menu rectangle with the text being text1, Y location being Y, and method to be called method
function menuRectangle(text1, Y, method){
    var c = 15;//rectangle corner curve radius

    var g = new createjs.Graphics();
    g.setStrokeStyle(2);
    g.beginStroke("white");
    g.beginFill("#000000");
    g.drawRoundRect(320, Y, 150, 35, c, c, c, c);
    
    var rect = new createjs.Shape(g);
    rect.regX = 75;
    rect.regY = 17.5;
    
    
    var g2 = new createjs.Graphics();
    g2.setStrokeStyle(2);
    g2.beginStroke("white");
    g2.beginFill("#DCDCDC");
    g2.drawRoundRect(320, Y, 150, 35, c, c, c, c);
    
    var rect2 = new createjs.Shape(g2);
    rect2.regX = 75;
    rect2.regY = 17.5;
    
    var textObject= new createjs.Text(text1, "20px Arial", "#dbdbdb");
    textObject.textAlign = "center";
    textObject.x = 320;
    textObject.y = Y - 10;
    
    var menuRect = new createjs.Container();
    menuRect.addChild(rect2);
    menuRect.addChild(rect);
    menuRect.addChild(textObject);
    menuRect.on('mousedown', function(){
                menuRect.getChildAt(1).alpha = 0.4;
                stage.update();
            }
        );
    menuRect.on('pressup', method);
    menuRect.on('pressup', function(){
                menuRect.getChildAt(1).alpha = 1;
                stage.update();
    });
    
    return menuRect;
}

function selectMap(choice){
    if(choice === 'song1'){
        selectedMap = new Song1;
    }
    if (choice === 'song2') {
        selectedMap = new Song2;
    }
}

function resetMenu(){
        stage.removeChild(currentMenu);
        currentMenu = new createjs.Container();
        currentMenu.addChild(menuBackground);
        stage.update();
}

//a filler method for the other game mode menu button
function fill(){
    
}