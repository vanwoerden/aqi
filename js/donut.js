function drawDonuts(days, target) {
	// set the dimensions and margins of the graph
	console.log("drawDonuts " + target);

	var width = 24,
		height = 24,
		margin = 0;
	
	// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
	var radius = 12;
	
	// append the svg object to the div called 'my_dataviz'
	var svg = d3.select(target)
	  .append("svg")
		.attr("width", width)
		.attr("height", height)
	  .append("g")
		.attr("transform", "translate(" + 12 + "," + 10 + ")");
	
	// Create dummy data
	//var data = {a: 9, b: 20, c:30, d:8, e:12};
	var data = {a: days, b: 365 - days};
	
	// set the color scale
	var color = d3.scaleOrdinal()
	  .domain(data)
	  .range(["#084081", "#a8ddb5"]);
	
	// Compute the position of each group on the pie:
	var pie = d3.pie()
	  .value(function(d) {return d.value; });
	var data_ready = pie(d3.entries(data));
	
	// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
	svg
	  .selectAll('whatever')
	  .data(data_ready)
	  .enter()
	  .append('path')
	  .attr('d', d3.arc()
		.innerRadius(0)
		.outerRadius(radius)
	  )
	  .attr('fill', function(d){ return(color(d.data.key)); })
	  .attr("stroke", "black")
	  .style("stroke-width", "1px")
	  .style("opacity", 1);
}