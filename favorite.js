/*Array container for vote choices:   */
var favBeverages = new Array ();
  favBeverages.push({ label: "beer", y: 0, folder: "Images/beer.jpg", x: 0 });
  favBeverages.push({ label: "wine", y: 0, folder: "Images/wine.jpg", x: 1 });
  favBeverages.push({ label: "tea", y: 0, folder: "Images/tea.jpg", x: 2 });
  favBeverages.push({ label: "soda", y: 0, folder: "Images/soda.jpg", x: 3 });
  favBeverages.push({ label: "sports drink", y: 0, folder: "Images/sportsdrink.jpeg", x: 4 });
  favBeverages.push({ label: "energy drink", y: 0, folder: "Images/energydrinks.jpg", x: 5 });
  favBeverages.push({ label: "coffee", y: 0, folder: "Images/coffee.jpg", x: 6 });
  favBeverages.push({ label: "water", y: 0, folder: "Images/water.jpg", x: 7 });
  favBeverages.push({ label: "milk", y: 0, folder: "Images/milk.jpg", x: 8 });
  favBeverages.push({ label: "fruit juice", y: 0, folder: "Images/fruitjuice.jpg", x: 9 });

/*Insert voting history, if any, into new session:   */
  var voteHistory = new Array();
    voteHistory = JSON.parse(localStorage.getItem("beverageTracker"));
  function retrieveHistory() {
    if (voteHistory) {
      for (index = 0; index < favBeverages.length; index++) {
      favBeverages.splice(index, 1, voteHistory[index]);
      } /*if closure. */ } /*for closure. */ }; /*function retrieveHistory closure. */
  retrieveHistory();

/*Function that displays beverage set and buttons, and resets beverages after vote:  */
function selectBeverages () {
  var img1Index = Math.floor(Math.random() * favBeverages.length);
  var img1Disp = document.createElement("img");
    img1Disp.id = "img1pic";
    img1Disp.src = favBeverages[img1Index].folder;
  document.getElementById("img1").appendChild(img1Disp);
  var img1Button = document.createElement("input");
    img1Button.className = "choiceButton";
    img1Button.type = "button";
    img1Button.name = "btn1";
    img1Button.id = img1Index;
    img1Button.value = "Vote for me!";
    img1Button.addEventListener("click", function () {
        countVote(this);
        clearSpans();
      }); /*addEventListener closure.   */
  document.getElementById("img1").appendChild(img1Button);
/*do:while loop to ensure second image is different from first image:   */
  do {var img2Index = Math.floor(Math.random() * favBeverages.length)}
    while (img2Index == img1Index);
  var img2Disp = document.createElement("img");
    img2Disp.id = "img2pic"
    img2Disp.src = favBeverages[img2Index].folder;
  document.getElementById("img2").appendChild(img2Disp);
  var img2Button = document.createElement("input");
    img2Button.className = "choiceButton";
    img2Button.type = "button";
    img2Button.name = "btn2";
    img2Button.id = img2Index;
    img2Button.value = "Vote for me!";
    img2Button.addEventListener("click", function () {
    countVote(this);
    clearSpans();
      }); /*addEventListener closure.   */
  document.getElementById("img2").appendChild(img2Button);
}; /*function selectBeverages closure.  */

/*Build and display list of beverages so user can sort/hide order:  */
window.addEventListener('load', function () {
    for (index = 0; index < favBeverages.length; index++) {
      var listItem =  document.createElement("dd");
      listItem.draggable = true;
      listItem.className = "normal";
      var listDisplay = document.getElementById("bevList");
      listDisplay.appendChild(listItem);
      listItem.textContent = favBeverages[index].label;
    } /*for loop closure.   */
}); /*window.addEventListener closure.   */

window.addEventListener("load", initializeDragItems);
function initializeDragItems() {
  var list = document.getElementById("bevList");
  list.addEventListener("dragstart", startDrag);
  list.addEventListener("dragover", dragOverItem);
  list.addEventListener("drop", dropItem);
  list.addEventListener("dragleave", resetStyle);
}

function startDrag(event) {
  event.dataTransfer.setData("text/plain",
      event.target.outerHTML);
}

function dragOverItem(event) {
  event.preventDefault();
  event.target.setAttribute("class", "droppable");
}

var changeOrder = 0;
console.log(voteHistory);

function dropItem(event) {
  event.preventDefault();
  var draggedContent = event.dataTransfer.getData("text");
  var droppedContent = event.target.outerHTML;
  var fullList = event.target.parentNode;
  fullList.innerHTML = fullList.innerHTML.replace(draggedContent, "");
  fullList.innerHTML = fullList.innerHTML.replace(droppedContent, droppedContent+draggedContent);
  fullList.innerHTML = fullList.innerHTML.replace("droppable", "normal");
//  console.log("Dropping "+draggedContent+" onto "+event.target.innerHTML);

/*
var newOrder = document.getElementsByTagName("dd");
console.log(newOrder);
console.log(newOrder[2]);

  for (index = 0; index < favBeverages.length; index++) {

console.log(newOrder[index]);

    favBeverages[index].x = newOrder[index];
console.log(favBeverages[index].x = newOrder[index]);
  localStorage.setItem("beverageTracker", JSON.stringify(favBeverages));
  chart.render();
  }
*/



}



function resetStyle(event) {
  var fullList = event.target.parentNode;
  fullList.innerHTML = fullList.innerHTML.replace("droppable", "normal");
}


/*Variables and function to increment value in chart:   */
var chart = 0;
var incrementVote = 0;
function countVote (vote) {
  incrementVote = parseInt(vote.id);
  favBeverages[incrementVote].y++;
  localStorage.setItem("beverageTracker", JSON.stringify(favBeverages));
  chart.render();
}; /*function countVote closure.  */

/*onVote, function that removes images and buttons:   */
function clearSpans () {
  if (document.getElementById("img1pic") != "") {
  var removeImg1 = document.getElementById("img1pic");
  removeImg1.parentNode.removeChild(removeImg1);
  var removeBtn1 = document.getElementsByName("btn1");
  removeBtn1[0].parentNode.removeChild(removeBtn1[0]);
  } /*if closure. */
  if (document.getElementById("img2pic") != "") {
    var removeImg2 = document.getElementById("img2pic");
    removeImg2.parentNode.removeChild(removeImg2);
    var removeBtn2 = document.getElementsByName("btn2");
    removeBtn2[0].parentNode.removeChild(removeBtn2[0]);
  } /*if closure. */
  selectBeverages();
}; /*function clearSpans closure.   */

/*Chartjs.js charting function:   */
window.addEventListener('load', function () {
  chart = new CanvasJS.Chart("chartDiv", {
      backgroundColor: "",
      animationEnabled: true,
      animationDuration: 750,
      interactivityEnabled: true,
      width: 600,
      height: 400,

    title:{
      text: "The beverage people enjoy most:",
      fontColor: "beige",
      dockInsidePlotArea: true,
      fontFamily: "Serif",
    },
    axisY:{
      interval: 5,
      labelFontColor: "red",
      gridColor: "#73cd12",
      lineColor: "#73cd12"
    },
    axisX:{
      labelAngle: 45,
      labelFontColor: "orange",
      labelFontWeight: "bold",
      lineColor: "#73cd12",
      labelMaxWidth: 70,
      labelWrap: true
    },
    data: [//array of dataSeries
     { //dataSeries object

      /*** Change type "column" to "bar", "area", "line" or "pie"***/
      bevelEnabled: true,
      type: "column",
      dataPoints: favBeverages
     }
     ]
   });

  chart.render();
  selectBeverages();
}); /*window.addEventListener closure.  */
