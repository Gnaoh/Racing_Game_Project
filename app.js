startTime = null;


/*========================================
              PLAYER ONE CONFIG
========================================*/
window.addEventListener('keyup', function(event) {
  if (event.keyCode === 65) {
    this.$elem1 = document.getElementById('playerOne');
    this.$elem1.style.left = parseInt(this.$elem1.style.left, 10) + 30 + "px";
    var playerOnePos = getComputedStyle(this.$elem1).getPropertyValue("left");
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
    this.$elem2 = document.getElementById('playerTwo');
    this.$elem2.style.left = parseInt(this.$elem2.style.left, 10) + 30 + "px";
        var playerTwoPos = getComputedStyle(this.$elem2).getPropertyValue("left");
       
        if ( playerTwoPos === 1500 + "px") {
            winner("Blue car");            
        }
  }
});

/*========================================
              COUNT DOWN
========================================*/

window.setInterval(countDown, 1000);
  function countDown() {
    time -=1;
    $('#countdown').html(time); 
  if (time === 0) {
    $('#countdown').text("GO!");
    document.getElementById("countdown").style.color = "#0eb700";  
  } else if (time === -1) {
    $('#countdown').remove();

  }
}

/*========================================
              RESET/DRIVE
========================================*/
CarMove = function() {
    this.$elem1 = document.getElementById('playerOne');
    this.$elem2 = document.getElementById('playerTwo');
    this.$elem1.style.left = "0px";
    this.$elem2.style.left = "0px";
    time = 6;

};


/*========================================
              WINNER
========================================*/
function winner(win){
    alert("Congratulations, " + win + " is the winner!");
    setTimeout(CarMove());
}

//LOAD GAME
CarMove();
