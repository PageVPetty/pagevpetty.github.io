var player = 1;
var tiles = document.querySelectorAll("#board > div");

var updatePlayer = function (){
  var playerSpan = document.querySelector("#player");
  playerSpan.innerHTML = player;
};

var checkTitles = function (tiles, symbol) {
var match = true;
  tiles.forEach(function (tile) {
    if (tile.innerHTML != symbol) {
      match = false;
    }
  });
  return match;
};

var checkWinner = function () {
  var symbol;
  if (player == 1) {
    symbol = "X";
  }else {
    symbol = "O";
  }
  var row1 = checkTiles(document.querySelectorAll(".row1"), symbol;
  var row2 = checkTiles(document.querySelectorAll(".row2"), symbol;
  var row3 = checkTiles(document.querySelectorAll(".row3"), symbol;
  var col1 = checkTiles(document.querySelectorAll(".col2"), symbol;  
  var col2 = checkTiles(document.querySelectorAll(".col2"), symbol;
  var col3 = checkTiles(document.querySelectorAll(".col3"), symbol;
  var diag1 = checkTiles(document.querySelectorAll(".diag1"), symbol;
  var diag2 = checkTiles(document.querySelectorAll(".diag2), symbol;                                                  
                        
                                                  
        
  if (row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2) {
    alert("Player " + symbol + "won!");
}
};
                       
                        
tiles.forEach(function (tile) {
  tile.onclick = function () {
    if (tile.classList.contains("played")) {
      return;
    }
    tile.classList.add("played");
     if (player == 1) {
       tile.innerHTML = "X"
       tile.style.color = "#0c0";
       player = 2;
    }  else {
       tile.innerHTML = "0";
       tile.style.color = "#00c";
      player = 1;
    }
    updatePlayer();
  };
  
});
  updatePlayer();

