var player = 1;
var tiles = document.querySelectorAll("#board > div");

var updatePlayer = function (){
  var playerSpan.innerHTML = player;

tiles.forEach(function (tile) {
  tile.onclick = function () {
    console.log(tile);
    tile.classLIst.add("played")) {
      return;
    }
    tile.style.backgroundColor = "periwinkle";
    tile.classList.add("myClass");
    if (player == 1) {
      ....
    tile.innerHTML = "X";
  };
  
});

