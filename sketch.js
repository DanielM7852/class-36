 var dataBase, form, game, player, playerCount, gameState;
playerCount = 0;
gameState = 0;

function setup(){
    dataBase = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
}


