var chart = null;

window.onload = function () {



	 chart=new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Who's the favorite?"
		},
		animationEnabled: false,   // change to true
		data: [
		{
			// Change type to "bar", "area", "spline", "pie",etc.

			type: "column",
			dataPoints: musicians
		}
			]
	});
	chart.render();
}
