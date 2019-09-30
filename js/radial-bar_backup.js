function draw(csvFile, target, year) {
	var svg = d3.select(target),
	width = +svg.attr("width"),
	height = +svg.attr("height"),
	innerRadius = 30,
	outerRadius = 200, //Math.min(width, height) / 2,
	g = svg.select("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	
	//console.log(width);
	//console.log(height);

	var x = d3.scaleBand()
		.range([0, 2 * Math.PI])
		.align(0);
	
	var y = d3.scaleRadial()
		.range([innerRadius, outerRadius - 100]);
	
	var z = d3.scaleOrdinal()
		//.range(["#BFF5DB", "#F7DB76", "#E8A945", "#D1324C", "#880D1E", "#242038", "#fff"]);
		.range([
			"#242038",
			"#880D1E",
			"#D1324C",
			"#E8A945",
			"#F7DB76",
			"#BFF5DB",
			"#fff"
			]); // range inverted
	
	d3.csv(csvFile, function(d, i, columns) {
		for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
		d.total = t;
		return d;
	}).then(function(data) {
	
		x.domain(data.map(function(d) { return d.State; }));
		y.domain([0, d3.max(data, function(d) { return d.total; })]);
		z.domain(data.columns.slice(1));
	  
		g.enter().append("g")
			.selectAll("g")
			.data(d3.stack().keys(data.columns.slice(1))(data))
			.enter().append("g")
				.attr("fill", function(d) { return z(d.key); })
		
			.selectAll("path")
			.data(function(d) { return d; })
			.enter().append("path")
				.transition()
				.duration(2000)
				.attr("d", d3.arc()
					.innerRadius(function(d) { return y(d[0]); })
					.outerRadius(function(d) { return y(d[1]); })
					.startAngle(function(d) { return x(d.data.State); })
					.endAngle(function(d) { return x(d.data.State) + x.bandwidth(); })
					.padAngle(0.01)
					.padRadius(innerRadius));
	
	//  var label = g.append("g")
	//	.selectAll("g")
	//	.data(data)
	//	.enter().append("g")
	//	  .attr("text-anchor", "middle")
	//	  .attr("transform", function(d) { return "rotate(" + ((x(d.State) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")translate(" + innerRadius + ",0)"; });
	
		  // month indicator lines
	  //label.append("line")
	  //    .attr("x2", -5)
	  //    .attr("stroke", "#000");
	
		  // month labels //
	  //label.append("text")
	  //    .attr("transform", function(d) { return (x(d.State) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)"; })
	  //    .text(function(d) { return d.State; });
	
	//  var yAxis = g.append("g")
	//	  .attr("text-anchor", "middle");
	//	  
	//
	//  var yTick = yAxis
	//	.selectAll("g")
	//	.data(y.ticks(0).slice(1))
	//	.enter().append("g");
	//
	//  yTick.append("circle")
	//	  .attr("fill", "none")
	//	  .attr("stroke", "#fff")
	//	  .attr("opacity", 0.2)
	//	  .attr("r", y);
	//
	//  yTick.append("text")
	//	  .attr("y", function(d) { return -y(d); })
	//	  .attr("dy", "0.35em")
	//	  .attr("fill", "none")
	//	  .attr("stroke", "#fff")
	//	  .attr("stroke-width", 4)
	//	  .text(y.tickFormat(5, "s"));
	//	  //.text(y.tickValues([0,5,10,15,20,25,30]));
	//
	//  yTick.append("text")
	//	  .attr("y", function(d) { return -y(d); })
	//	  .attr("dy", "0.35em")
	//	  .text(y.tickFormat(5, "s"));
	//	  //.text([5,10,15,20,25,30]);
	//
	//  yAxis.append("text")
	//	  .attr("y", function(d) { return -y(y.ticks(5).pop()); })
	//	  .attr("dy", "7.4em")
	//	  .text(year);
	//
	//  var legend = g.append("g")
	//	.selectAll("g")
	//	.data(data.columns.slice(1).reverse())
	//	.enter().append("g")
	//	  .attr("transform", function(d, i) { return "translate(250," + (12+i - (data.columns.length - 1) / 2) * 20 + ")"; });
	//
	//  legend.append("rect")
	//	  .attr("width", 18)
	//	  .attr("height", 18)
	//	  .attr("fill", z);
	//
	//  legend.append("text")
	//	  .attr("x", 24)
	//	  .attr("y", 9)
	//	  .attr("dy", "0.35em")
	//	  .text(function(d) { return d; });	
	});
}