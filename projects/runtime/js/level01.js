var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
      
        //creates a sawblade at any given x and y value
        function createSawBlade(x, y){
            var hitZoneSize = 25; //the size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 10; //sets the damage amount and assigns to a variable called damageFromObstacle
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and assigns it to sawBladeHitZone
            sawBladeHitZone.x = x; //assigns the x value using the argument passed as the x parameter
            sawBladeHitZone.y = y; //assigns the y value using the argument passed as the y parameter
            game.addGameItem(sawBladeHitZone); //adds the hitzone to the game
            var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the image as a bitmap and stores it to the variable obstacleImage
            sawBladeHitZone.addChild(obstacleImage); //adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -25 //modify the x value of the image to line up with the hitzone
            obstacleImage.y = -25 //modify the y value of the image to line up with the hitzone
        }

        function createSpikes(x, y){
            var hitZoneSize = 25; //the size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 10; //sets the damage amount and assigns to a variable called damageFromObstacle
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and assigns it to sawBladeHitZone
            spikeHitZone.x = x; //assigns the x value using the argument passed as the x parameter
            spikeHitZone.y = y; //assigns the y value using the argument passed as the y parameter
            game.addGameItem(spikeHitZone); //adds the hitzone to the game
            var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the image as a bitmap and stores it to the variable obstacleImage
            spikeHitZone.addChild(obstacleImage); //adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -25 //modify the x value of the image to line up with the hitzone
            obstacleImage.y = -25 //modify the y value of the image to line up with the hitzone
        }

        createSawBlade(400, groundY - 100);
        createSawBlade(600, groundY - 100);
        createSawBlade(800, groundY);

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
