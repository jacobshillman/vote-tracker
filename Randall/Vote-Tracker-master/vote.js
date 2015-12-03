var Artist = function(name, image) {
  this.name = name;
  this.image = image;
  this.votes = 0;
  this.label = name;
  this.y = 0;
}



//Generate random images
generateImage = function () {
var imageOne = Math.floor(Math.random()*musicians.length);
var imageTwo = Math.floor(Math.random()*musicians.length);

while (imageOne == imageTwo) {
       imageOne = Math.floor(Math.random()*musicians.length);
       imageTwo = Math.floor(Math.random()*musicians.length);
     }
var artistOne = document.getElementById("artistOne");
    artistOne.innerHTML = "<img src='"+musicians[imageOne].image+"'>";
    artistOne.setAttribute("data-artist", imageOne);
var artistTwo = document.getElementById("artistTwo");
    artistTwo.innerHTML = "<img src='"+musicians[imageTwo].image+"'>";
    artistTwo.setAttribute("data-artist", imageTwo);



  document.getElementById("artistOne").addEventListener("click", vote);
  document.getElementById("artistTwo").addEventListener("click", vote);
}


function vote() {
console.log(this);
console.log("clicked item " +this.getAttribute("data-artist"));
musicians[this.getAttribute("data-artist")].y++;
chart.render();
generateImage();
}

var musicians = new Array();//Array that holds names and images
  musicians.push(new Artist("The Beatles", "beatles.jpg"));
  musicians.push(new Artist("Pink Floyd", "floyd.png"));
  musicians.push(new Artist("Led Zeppelin", "zep.jpg"));
  musicians.push(new Artist("Real Estate", "real.jpg"));
  musicians.push(new Artist("Radiohead", "radiohead.jpg"));
  musicians.push(new Artist("Beach House", "bh.jpg"));
  musicians.push(new Artist("Pavement", "pavement.jpg"));
  musicians.push(new Artist("John Coltrane", "coltrane.jpg"));
  musicians.push(new Artist("Miles Davis", "miles.jpg"));
  musicians.push(new Artist("Explosions in the Sky", "explosions.jpg"));

window.addEventListener("load", generateImage);
