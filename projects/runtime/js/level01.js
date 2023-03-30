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
                { "type": "sawblade", "x": 400, "y": groundY -10 },
                { "type": "sawblade", "x": 600, "y": groundY -10 },
                { "type": "sawblade", "x": 800, "y": groundY -110},
                { "type": "sawblade", "x": 1000, "y": groundY -110},
                { "type": "sawblade", "x": 1650, "y": groundY -10},
                
                { "type": "enemy", hitBoxSize: 35, hitboxX: -65, hitboxY: -70, "x": 1000, "y": groundY - 70, scaleX: 0.1, scaleY: 0.1},
                { "type": "enemy2", hitBoxSize: 35, hitboxX: -35, hitboxY: -100, "x": 2500, "y": groundY - 70, scaleX: 0.3, scaleY: 0.3},

                { "type": "reward", "x": 1500, "y": groundY -50},
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
            var obstacleImage = draw.bitmap("img/Arc Star.png"); //draws the image as a bitmap and stores it to the variable obstacleImage
            sawBladeHitZone.addChild(obstacleImage); //adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -55 //modify the x value of the image to line up with the hitzone
            obstacleImage.y = -35 //modify the y value of the image to line up with the hitzone
            sawBladeHitZone.rotationalVelocity = -15; //rotates the sawblades
            obstacleImage.scaleX = 0.1;
            obstacleImage.scaleY = 0.1;
        }
/*
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
*/

        //Caustic
        function createEnemy(hitBoxSize, hitboxX,hitboxY, x, y, scaleX, scaleY,){
            var enemy = game.createGameItem("enemy", hitBoxSize); //create the gameItem and store it the the variable enemy
            var redSquare = draw.bitmap("img/Caustic.png"); //draws an image pulled from the img file
            redSquare.x = hitboxX; //stores a value as the x value of the gameItem
            redSquare.y = hitboxY; //stores a value as the y value of the gameItem
            enemy.addChild(redSquare); //adds the gameItem as a child of enemy
            enemy.x = x; //stores the value passed as the x argument as enemy's x value
            enemy.y = y; //stores the value passed as the y argument as enemy's y value
            game.addGameItem(enemy); //adds the enemy as an item to the game
            enemy.velocityX = -1; //assigns a value to the velocityX of the enemy to make it move
            redSquare.scaleX = scaleX;
            redSquare.scaleY = scaleY;

            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10); //subtracts from the health when Halle collides with the enemy
            }
            enemy.onProjectileCollision = function () {
                game.increaseScore(100); //increases the score when Halle shoots the enemy
                game.changeIntegrity(10); //add 10 to Hall health 
                enemy.fadeOut(); //enemy fades out when Halle shoots it
            }
        }   

        //Octane
        function createEnemy2(hitBoxSize, hitboxX,hitboxY, x, y, scaleX, scaleY,){
            var enemy = game.createGameItem("enemy2", hitBoxSize); //create the gameItem and store it the the variable enemy
            var redSquare = draw.bitmap("img/Octane.png"); //draws an image pulled from the img file
            redSquare.x = hitboxX; //stores a value as the x value of the gameItem
            redSquare.y = hitboxY; //stores a value as the y value of the gameItem
            enemy.addChild(redSquare); //adds the gameItem as a child of enemy
            enemy.x = x; //stores the value passed as the x argument as enemy's x value
            enemy.y = y; //stores the value passed as the y argument as enemy's y value
            game.addGameItem(enemy); //adds the enemy as an item to the game
            enemy.velocityX = -5; //assigns a value to the velocityX of the enemy to make it move
            redSquare.scaleX = scaleX;
            redSquare.scaleY = scaleY;

            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-40); //subtracts from the health when Halle collides with the enemy
            }
            enemy.onProjectileCollision = function () {
                game.increaseScore(100); //increases the score when Halle shoots the enemy
                game.changeIntegrity(10); //add 10 to Hall health 
                enemy.fadeOut(); //enemy fades out when Halle shoots it
            }
        }   

        //Ash
        function createEnemy3(hitBoxSize, hitboxX,hitboxY, x, y, scaleX, scaleY,){
            var enemy = game.createGameItem("enemy3", hitBoxSize); //create the gameItem and store it the the variable enemy
            var redSquare = draw.bitmap("img/Ash.png"); //draws an image pulled from the img file
            redSquare.x = hitboxX; //stores a value as the x value of the gameItem
            redSquare.y = hitboxY; //stores a value as the y value of the gameItem
            enemy.addChild(redSquare); //adds the gameItem as a child of enemy
            enemy.x = x; //stores the value passed as the x argument as enemy's x value
            enemy.y = y; //stores the value passed as the y argument as enemy's y value
            game.addGameItem(enemy); //adds the enemy as an item to the game
            enemy.velocityX = -5; //assigns a value to the velocityX of the enemy to make it move
            redSquare.scaleX = scaleX;
            redSquare.scaleY = scaleY;

            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-30); //subtracts from the health when Halle collides with the enemy
            }
            enemy.onProjectileCollision = function () {
                game.increaseScore(100); //increases the score when Halle shoots the enemy
                game.changeIntegrity(10); //add 10 to Hall health 
                enemy.fadeOut(); //enemy fades out when Halle shoots it
            }
        }   

        //Revenant
        function createEnemy4(hitBoxSize, hitboxX,hitboxY, x, y, scaleX, scaleY,){
            var enemy = game.createGameItem("enemy4", hitBoxSize); //create the gameItem and store it the the variable enemy
            var redSquare = draw.bitmap("img/Revenant.png"); //draws an image pulled from the img file
            redSquare.x = hitboxX; //stores a value as the x value of the gameItem
            redSquare.y = hitboxY; //stores a value as the y value of the gameItem
            enemy.addChild(redSquare); //adds the gameItem as a child of enemy
            enemy.x = x; //stores the value passed as the x argument as enemy's x value
            enemy.y = y; //stores the value passed as the y argument as enemy's y value
            game.addGameItem(enemy); //adds the enemy as an item to the game
            enemy.velocityX = -5; //assigns a value to the velocityX of the enemy to make it move
            redSquare.scaleX = scaleX;
            redSquare.scaleY = scaleY;

            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-100); //subtracts from the health when Halle collides with the enemy
            }
            enemy.onProjectileCollision = function () {
                game.increaseScore(100); //increases the score when Halle shoots the enemy
                game.changeIntegrity(10); //add 10 to Hall health 
                enemy.fadeOut(); //enemy fades out when Halle shoots it
            }
        }   

        function createReward(x, y){
           var reward = game.createGameItem("reward", 25);
           var blueSquare = draw.rect(50, 50, "blue");
           blueSquare.x = -25;
           blueSquare.y = -25;
           reward.addChild(blueSquare);
           reward.x = x;
           reward.y = y;
           game.addGameItem(reward);
           reward.velocityX = -1;

           reward.onProjectileCollision = function () {
               game.increaseScore(50);
               game.changeIntegrity(50);
               reward.fadeOut();
           }
       }   

       //loop for gameItems
       for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i]; //assigns the current index of the gameItems array to the variable gameItem
            
            if (gameItem.type === "sawblade"){ //checks the type of the game item
                createSawBlade(gameItem.x, gameItem.y); //if the type is true, it executes createSawBlade
            }
            if (gameItem.type === "enemy"){ //checks the type of the game item
                createEnemy(gameItem.hitBoxSize, gameItem.hitboxX, gameItem.hitboxY, gameItem.x, gameItem.y, gameItem.scaleX, gameItem.scaleY); //if the type is true, it executes createEnemy
            }
            if (gameItem.type === "enemy2"){ //checks the type of the game item
                createEnemy2(gameItem.hitBoxSize, gameItem.hitboxX, gameItem.hitboxY, gameItem.x, gameItem.y, gameItem.scaleX, gameItem.scaleY); //if the type is true, it executes createEnemy
            }
            if (gameItem.type === "enemy3"){ //checks the type of the game item
                createEnemy2(gameItem.hitBoxSize, gameItem.hitboxX, gameItem.hitboxY, gameItem.x, gameItem.y, gameItem.scaleX, gameItem.scaleY); //if the type is true, it executes createEnemy
            }
            if (gameItem.type === "enemy4"){ //checks the type of the game item
                createEnemy2(gameItem.hitBoxSize, gameItem.hitboxX, gameItem.hitboxY, gameItem.x, gameItem.y, gameItem.scaleX, gameItem.scaleY); //if the type is true, it executes createEnemy
            }
            if (gameItem.type === "reward"){ //checks the type of the game item
                createReward(gameItem.x, gameItem.y); //if the type is true, it executes createReward
            }
       }


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
