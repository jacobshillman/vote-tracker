function randomSelect (pic) {
  Math.random()
}



dataPoints = new Array [
  { label: "beer", y: 0 },
  { label: "wine", y: 0 },
  { label: "tea", y: 0 },
  { label: "soda", y: 0 },
  { label: "sports drink", y: 0 },
  { label: "energy drink", y: 0 },
  { label: "coffee", y: 0 },
  { label: "water", y: 0 },
  { label: "protein shake", y: 0 },
  { label: "fruit juice", y: 0 }
];

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {

    title:{
      text: "Fruits sold in First Quarter"
    },
    data: [//array of dataSeries
      { //dataSeries object

       /*** Change type "column" to "bar", "area", "line" or "pie"***/
       type: "column",
       dataPoints
     }
     ]
   });

 chart.render();

/*
function () {
  datapoints[2].y++;
};
*/
