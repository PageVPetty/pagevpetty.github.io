
var boardDiv = document.querySelector("#board");


for (var i = 0; i <4; i++) {
  var rowDiv = document.createElement("div");
  rowDive.classList.add("row");
  boardDiv.appendChild(rowDiv);
  

for (var j = 0; j <4; j++) {
  var tileDiv = document.createElement("div");
  tileDive.classList.add("tile");
  rowDiv.appendChild(tileDiv);  
  

