var player = 1;
var tiles = document.querySelectorAll("#board > div");

var updatePlayer = function (){
  var playerSpan = document.querySelector("#player");
  playerSpan.innerHTML = player;
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

