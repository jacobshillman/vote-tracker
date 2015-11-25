

var favBeverages = new Array ();
  favBeverages.push({ label: "beer", y: 0, folder: "Images/beer.jpg" });
  favBeverages.push({ label: "wine", y: 0, folder: "Images/wine.jpg" });
  favBeverages.push({ label: "tea", y: 0, folder: "Images/tea.jpg" });
  favBeverages.push({ label: "soda", y: 0, folder: "Images/soda.jpg" });
  favBeverages.push({ label: "sports drink", y: 0, folder: "Images/sportsdrink.jpeg" });
  favBeverages.push({ label: "energy drink", y: 0, folder: "Images/energydrinks.jpg" });
  favBeverages.push({ label: "coffee", y: 0, folder: "Images/coffee.jpg" });
  favBeverages.push({ label: "water", y: 0, folder: "Images/water.jpg" });
  favBeverages.push({ label: "milk", y: 0, folder: "Images/milk.jpg" });
  favBeverages.push({ label: "fruit juice", y: 0, folder: "Images/fruitjuice.jpg" });

  console.log(favBeverages[Math.floor(Math.random() * favBeverages.length)]);

function selectBeverages () {
  var img1Index = Math.floor(Math.random() * favBeverages.length);
  var img1Disp = document.createElement("img");
    img1Disp.src = favBeverages[img1Index].folder;
  document.getElementById("img1").appendChild(img1Disp);
  var img1Button = document.createElement("input");
    img1Button.type = "button";
    img1Button.name = "btn1";
    img1Button.id = img1Index;
    img1Button.value = "Vote for me!"
  document.getElementById("img1").appendChild(img1Button);
  var img2Index = Math.floor(Math.random() * favBeverages.length);
    if (img2Index == img1Index) {
      var img2Index = Math.floor(Math.random() * favBeverages.length);
      var img2Disp = document.createElement("img");
      img2Disp.src = favBeverages[img2Index].folder;
      document.getElementById("img2").appendChild(img2Disp);
      var img2Button = document.createElement("input");
        img2Button.type = "button";
        img2Button.name = "btn2";
        img2Button.id = img1Index;
        img2Button.value = "Vote for me!"
      document.getElementById("img2").appendChild(img2Button);
    } else {
      var img2Disp = document.createElement("img");
      img2Disp.src = favBeverages[img2Index].folder;
      document.getElementById("img2").appendChild(img2Disp);
      var img2Button = document.createElement("input");
        img2Button.type = "button";
        img2Button.name = "btn2";
        img2Button.id = img1Index;
        img2Button.value = "Vote for me!"
      document.getElementById("img2").appendChild(img2Button);
    }
};


var chart = null;

function countVote () {
//  favBeverages[??].y++;
  chart.render();
}

window.onload = function () {
  var chart = new CanvasJS.Chart("chartDiv", {

    title:{
      text: "The beverage people enjoy most:"
    },

    data: [//array of dataSeries
       { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "line",
         dataPoints: favBeverages
       }
     ]
   });

 chart.render();
 selectBeverages();

}
/*
function () {
  datapoints[2].y++;
 chart.render();
};
*/
