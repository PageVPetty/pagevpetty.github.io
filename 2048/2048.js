var board = {

};

var tileKey = function (col, row) {
  return "tile" + col +
}

var createBoard = function () {
  var boardDiv = document.querySelector("#board");

  for (var row = 0; row < 4; row++) {
    var tableRow = document.createElement("tr");
    tableRow.classList.add("row");
    boardDiv.appendChild(tableRow);

    for (var col = 0; col <4; col++) {
      var tileDiv = document.createElement("td");
      var key = tileKey(col, row);
      tileDiv.id = = key;
      tileDiv.classList.add("tile");
      tableRow.appendChild(tileDiv);
    }
  }
};

var updateBoard = function () {
  for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 4; col++) {
      var key = tileKey(col, row);
      var value = board[key];
      if (value) {
        tileDiv.innerHTML = value;

      } else {

      }
    }
  }
};

var addTile = function () {
  board["tile1-1"] = 4;
};

createBoard();

addTile();
console.log(board);
