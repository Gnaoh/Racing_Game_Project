
// Add keyBinding for movement to Car1
window.addEventListener('keyup', function(event) {
  if (event.keyCode === 39) {
    this.$element = document.getElementById('playerOne');
    this.$element.style.left = parseInt(this.$element.style.left, 10) + 30 + "px";
        var car1Pos = getComputedStyle(this.$element);

        if ( car1Pos === 1500 + "px")
            {winner("Player 1");}        
  }
});

// Add keyBinding for movement to Car2
window.addEventListener('keyup', function(event) {
  if (event.keyCode === 68) {
    this.$element = document.getElementById('playerTwo');
    this.$element.style.left = parseInt(this.$element.style.left, 10) + 30 + "px";}
        var car2Pos = getComputedStyle(this.$element).getPropertyValue("left");

        if ( car2Pos === 1500 + "px")
            {winner("Player 2");} 
  });

//ADD BOT

botRacer = function() {
  this.$element = document.getElementById('playerTwo');
  this.$el.style.left = parseInt(this.$el.style.left, 10) + 1 + "px";
        var car2Pos = getComputedStyle(this.$el).getPropertyValue("left");
        if ( car2Pos === 660 + "px")
            { winner("Player 2");
                aiStop();   } 
};

botMove = function() {
  var botInt = setInterval(aiCar, 15)
};

function botStop() {
  clearInterval (botInt);
}




// Reset position for the individual Cars
CarMove = function() {
    // grab the car element
    this.$element = document.getElementById('playerOne');
    this.$el2 = document.getElementById('playerTwo');
    // set the starting position of the Track
    this.$element.style.left = "0px";
    this.$el2.style.left = "0px";

};

// Winner Alert & car reset //
function winner(win){
    alert(win + " is the winner!");
    setTimeout(CarMove());
}

// intialize CarMove on page load //
CarMove();