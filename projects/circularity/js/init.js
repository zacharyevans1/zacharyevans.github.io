var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
    var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
    var circle; //establishes a variable
    var circles = []; //establishes a second variable that contains an array
        // TODO 2 : Create a function that draws a circle 
    function drawCircle(){
        circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); //We temporarily store the output of the function in 'circle'
        physikz.addRandomVelocity(circle, canvas); //we then use the 'physikz' library of function to add a random velocity and direction to our circle
        view.addChild(circle); //this allows us to see the circle
        circles.push(circle); //this saves each circle in an array
    }

        // TODO 3 / 7 : Call the drawCircle() function 
    for (var loopsCompleted = 0; loopsCompleted < 100; loopsCompleted++){ //this draws 100 circles
        drawCircle();
    }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position 
            //we deleted these in order to go through 100 circles quickly
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
         
            // TODO 9 : Iterate over the array
            for (var i = 0; i < circles.length;i++){ //creates a loop to go through all circles created
                physikz.updatePosition(circles[i]); //actually moves the circle
                game.checkCirclePosition(circles[i]); //keeps circles on the screen
            }
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            else if ( circle.x < 0) {
                circle.x = canvas.width; //this else if teleports the circle to the right side when it goes to the left.
            }else if (circle.y > canvas.height ){
                circle.y = 0; //this else if teleports it to the top when it reaches the bottom
            }else if ( circle.y < 0) {
                circle.y = canvas.height; //this teleports it to the bottom when it reaches the top
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
