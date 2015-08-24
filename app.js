startTime = null;

/*========================================
              PLAYER ONE CONFIG
========================================*/
window.addEventListener('keyup', function(event) {
  if (event.keyCode === 65) {
    this.$racecar = document.getElementById('playerOne');
    this.$racecar.style.left = parseInt(this.$racecar.style.left, 10) + 30 + "px";
    var playerOnePos = getComputedStyle(this.$racecar).getPropertyValue("left");
    this.$startTime = $.now();

      if ( playerOnePos === 1500 + "px") {
          winner("Red car");
        this.$raceTime = $.now() - this.$startTime;
        $('#timer1').text(this.$raceTime * Math.pow(10, -3)*10.0 + "s");
      }
  }
});

/*========================================
              PLAYER TWO CONFIG
========================================*/
window.addEventListener('keyup', function(event) {
  if (event.keyCode === 76) {
    this.$racecar = document.getElementById('playerTwo');
    this.$racecar.style.left = parseInt(this.$racecar.style.left, 10) + 30 + "px";
        var playerTwoPos = getComputedStyle(this.$racecar).getPropertyValue("left");
       
        if ( playerTwoPos === 1500 + "px") {
            winner("Blue car");            
        }
  }
});

/*========================================
              RESET/DRIVE
========================================*/
CarMove = function() {
    this.$racecar = document.getElementById('playerOne');
    this.$racecar2 = document.getElementById('playerTwo');
    this.$racecar.style.left = "0px";
    this.$racecar2.style.left = "0px";

};

/*========================================
              WINNER
========================================*/
function winner(win){
    alert(win + " is the winner!");
    setTimeout(CarMove());
}

//LOAD GAME
CarMove();


// /*========================================
//               ADD BOT
// ========================================*/
// botRacer = function() {
//   this.$racecar = document.getElementById('playerTwo');
//   this.$el.style.left = parseInt(this.$el.style.left, 10) + 1 + "px";
//         var car2Pos = getComputedStyle(this.$el).getPropertyValue("left");
//         if ( car2Pos === 660 + "px")
//             { winner("Player 2");
//                 aiStop();   } 
// };

// botMove = function() {
//   var botInt = setInterval(aiCar, 15)
// };

// function botStop() {
//   clearInterval(botInt);
// }
