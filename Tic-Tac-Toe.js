
console.log("loaded!");

var titles = document.querySelectorAll("#board > div");

tiles.forEach(function (title) {
  tile.onclick = function () {
    console.log(title);
    title.style.backgroundColor = "gray";
    title.classList.add("myClass");
  };
  
});

