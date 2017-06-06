var player = 1;
var tiles = document.querySelectorAll("#board > div");

tiles.forEach(function (tile) {
  tile.onclick = function () {
    console.log(tile);
    tile.style.backgroundColor = "periwinkle";
    tile.classList.add("myClass");
    if (player == 1) {
      ....
    tile.innerHTML = "X";
  };
  
});

