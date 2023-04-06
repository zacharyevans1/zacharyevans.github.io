var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        var buildings = [];
        
        // ANIMATION VARIABLES HERE:
       var tree; 
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
        
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'blue'); //changes background/////////////////
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield

            //loop that draws stars
        for (var i = 0; i < 200; i++){
            var circle = draw.circle(1, "white", "LightGray", 2); //draws a circle and stores it in the circle variable
            circle.x = canvasWidth * Math.random(); //takes the width of the canvas and multiplies it times a random decimal and uses canvas.width to make sure it stays on the canvas
            circle.y = groundY * Math.random(); //takes groundY and multiplies it times a random decimal to make sure it stays on the canvas
            background.addChild(circle) //adds that circle to the background as a child
        }

            var moon = draw.bitmap("img/moon.png"); //draws the image as a bitmap and stores it to the variable moon
            moon.x = canvasWidth - 1000; //creates am x key for the moon object and assigns it a value of 300
            moon.y = groundY - 500; //creates an y key for the moon object and assigns it a value of 200
            moon.scaleX = 0.5; //scales the x value of the moon
            moon.scaleY = 0.5; //scales the y value of the moon
            background.addChild(moon); //add the moon as a child to background
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeights = [300, 150, 175, 200, 275]; //creates an array called buildingHeight and stores them in the variable buildingHeight
            var buildingColors = ["black", "blue", "gray", "red", "green"] //created an array of colors and stored them in the variable buildingColors
            var building;
            for (var i = 0; i < buildingHeights.length; i++) { 

                building = draw.rect(75, buildingHeights[i], buildingColors[i], "Black", i); //draws a rectangle and store it in the variable building
                building.x = 200 * i; //Multiplies 200 times the current iteration of the loop so that the buildings are 200 pixels apart and stores it as the x value of the building
                building.y = groundY - buildingHeights[i]; //subtracts buildingHeight from groundY and sets it as the y value
                background.addChild(building); //adds the building as a child to the background
                buildings.push(building); //add the buildings to the buildings array
              }



            //loop that will create the buildings
            var backgroundImg = draw.bitmap("img/image(2).png"); //draws an image using a bitmap
            backgroundImg.x = -120; //sets x value of the image
            backgroundImg.y = -50; //sets y value of the image
            backgroundImg.scaleX = 1.2; //scales the image
            backgroundImg.scaleY = 1; //scales the image
            background.addChild(backgroundImg); //adds backgroundImg to a child of background
            
            /*for (var i = 0; i < 5; i++) { 
                var buildingHeight = 300; //creates a variable called buildingHeight and stores 300 as the height of the building
                var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1); //draws a rectangle and store it in the variable building
                building.x = 200 * i; //Multiplies 200 times the current iteration of the loop so that the buildings are 200 pixels apart and stores it as the x value of the building
                building.y = groundY - buildingHeight; //subtracts buildingHeight from groundY and sets it as the y value
                background.addChild(building); //adds the building as a child to the background
                buildings.push(building); //add the buildings to the buildings array
              }
            */
            // TODO 4: Part 1 - Add a tree
        tree = draw.bitmap("img/Crypto.png"); //draws a tree using bitmap and stores it the the variable tree
        tree.x = canvasWidth - 200; //sets the x value of the tree
        tree.y = groundY - 240; //sets the y value of the tree
        tree.scaleX = 0.05
        tree.scaleY = 0.05
        background.addChild(tree); //adds the tree to the background as a child

           
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 2; //takes the current x position of the tree and subtracts from the current x position to move left and reassigns it to the tree.x position 
            
            //check if the tree has moved off the canvas and if it has it resets it to the right side of the canvas
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            //loops through the buildings array to accesseach index of the array, move it, and check its position on the canvas and resets to the right side if it goes off the left
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x - 1; //moves the building
                
              if (building.x < -100) //checks the position of the building
                building.x = canvasWidth; //resets the building to the right side of the canvas
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
