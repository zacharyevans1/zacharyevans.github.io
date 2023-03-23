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
            sawBladeHitZone.rotationalVelocity = -15; //rotates the sawblades
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

        function createEnemy(x, y){
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "red");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = 400;
            enemy.y = groundY - 50;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 1;
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10);
            }
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                game.changeIntegrity(10);
                enemy.fadeOut();
            }
        }   

        createEnemy(400, groundY - 50, -1.5, 'red', -10);

        function createReward(x, y){
           var reward = game.createGameItem("reward", 25);
           var blueSquare = draw.rect(50, 50, "blue");
           blueSquare.x = -25;
           blueSquare.y = -25;
           reward.addChild(blueSquare);
           reward.x = 400;
           reward.y = groundY - 50;
           game.addGameItem(reward);
           reward.velocityX = -1;
           reward.rotationalVelocity = 1;
           reward.onProjectileCollision = function () {
               game.increaseScore(50);
               game.changeIntegrity(50);
               reward.fadeOut();
           }
       }   

       createReward(500, groundY - 50);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
