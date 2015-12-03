var Artist = function(name, image) {
  this.name = name;
  this.image = image;
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
    artistOne.innerHTML = "<img src='"+musicians[imageOne].image+"'>";//Display image one
    artistOne.setAttribute("data-artist", imageOne);
var artistTwo = document.getElementById("artistTwo");
    artistTwo.innerHTML = "<img src='"+musicians[imageTwo].image+"'>";//Display image two
    artistTwo.setAttribute("data-artist", imageTwo);


//event listeners to click the images to then be added to the vote tracker
  document.getElementById("artistOne").addEventListener("click", vote);
  document.getElementById("artistTwo").addEventListener("click", vote);
}


function vote() {//add vote to tracker and reinitializes image generator
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
//chart array

/*************************************************
Drag and Drop code
*************************************************/
window.addEventListener("load", initializeDragItems);
function initializeDragItems() {
  var list = document.getElementById("labels");
  list.addEventListener("dragstart", startDrag);
  list.addEventListener("dragover", dragOverItem);
  list.addEventListener("drop", dropItem);
  list.addEventListener("dragleave", resetStyle);
  list.innerHTML="";
  for (index=musicians.length-1; index >=0; index--) {
      list.innerHTML+=""
      list.innerHTML+="<li draggable='true' class='normal' data-index='"+index+"'>"+"<input type='checkbox'>"+musicians[index].name+"</input>"+"</li>"
  }
}

function startDrag(event) {
  event.dataTransfer.setData("text/plain", event.target.getAttribute("data-index"));
}

function dragOverItem(event) {
  if (event.target.outerHTML!=event.dataTransfer.getData("text")){
    event.preventDefault();
    event.target.setAttribute("class", "droppable");
  }
}

function dropItem(event) {
  event.preventDefault();
  var movedIndex = parseInt(event.dataTransfer.getData("text"));
  var movedArtist = musicians[movedIndex];
  insertIndex=parseInt(event.target.getAttribute("data-index"));
  musicians.splice(insertIndex, 0, movedArtist);
  if(movedIndex > insertIndex){
    musicians.splice(movedIndex+1, 1);
  }else {
    musicians.splice(movedIndex, 1);
  }
  initializeDragItems();
  for (index=musicians.length-1; index >=0; index--) {
    musicians[index].x= index;
  }
  chart.render();
}

function resetStyle(event) {
  var fullList = event.target.parentNode;
  fullList.innerHTML = fullList.innerHTML.replace("droppable", "normal");
}
