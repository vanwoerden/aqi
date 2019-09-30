var currentYear = "2008";

function draw(csvFile, target, year) {
	var svg = d3.select(target),
	width = +svg.attr("width"),
	height = +svg.attr("height"),
	innerRadius = 50, //30
	outerRadius = 280; //200//Math.min(width,height) / 2,
	
	console.log('draw');
	//if(typeof g != undefined) {
	//	var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	//}
	var g = svg.select("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	
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
		console.log(data);
		
		var segment = g.selectAll("g")
			.data(d3.stack().keys(data.columns.slice(1))(data));

		segment.enter().append("g")
				.attr("fill", function(d) { return z(d.key); });
		//segment.attr("fill", function(d) { return z(d.key); });
		
		var bar = segment.selectAll("path")
			.data(function(d) { return d; });
			
			//bar.exit()
			//.transition(500)
			//.remove();
			
		var arc = d3.arc()
			.innerRadius(function(d) { return y(d[0]); })
			.outerRadius(function(d) { return y(d[1]); })
			.startAngle(function(d) { return x(d.data.State); })
			.endAngle(function(d) { return x(d.data.State) + x.bandwidth(); });
			
				//.padAngle(0.01);
				//.padRadius(innerRadius);
				
		console.log('arc');
		console.log(arc);

				//var tween = pathTween(arc, 4);
				
				//var d0 = "M0,0c100,0 0,100 100,100c100,0 0,-100 100,-100",
				//d1 = "M0,0c100,0 0,100 100,100c100,0 0,-100 100,-100c100,0 0,100 100,100";
				
		bar.exit().remove();
		var enter = bar.enter()
                    .append("path")
						.attr("d", d3.arc()
							.innerRadius(function(d) { return y(d[0]); })
							.outerRadius(function(d) { return y(d[1]); })
							.startAngle(function(d) { return x(d.data.State); })
							.endAngle(function(d) { return x(d.data.State) + x.bandwidth(); }));
		
		bar = bar.merge(enter);
		//bar
		//	.enter().append("path")
		//		//.attr("d", arc);
		//		.attr("d", d3.arc()
		//			.innerRadius(innerRadius)
		//			.outerRadius(0)
		//			.startAngle(function(d) { return x(d.data.State); })
		//			.endAngle(function(d) { return x(d.data.State) + x.bandwidth(); }))
		//		.transition()
		//		.attr("d", d3.arc()
		//			.innerRadius(function(d) { return y(d[0]); })
		//			.outerRadius(function(d) { return y(d[1]); })
		//			.startAngle(function(d) { return x(d.data.State); })
		//			.endAngle(function(d) { return x(d.data.State) + x.bandwidth(); }));
					//.padAngle(0.005));
					//.padRadius(innerRadius));
			//try {
		bar
			.transition()
		//		.attrTween("d", tweenDonut(arc));
			//	.attrTween("d", pathTween(arc, 4));
			
			//.duration(200)

			.attr("d", arc);
			
		
      
		
			
			function arcTween(a) {
			  var i = d3.interpolate(this._current, a);
			  this._current = i(0);
			  return function(t) {
			    return arc(i(t));
			  };
			}
		
	});
}
function tweenDonut(b, arc) {
	console.log("tween queen");
	b.innerRadius = 25;
	var i = d3.interpolate({innerRadius: arc.innerRadius}, b);
	return function(t) { return arc(i(t)); };
}
function jumpToNextYear() {
	// move forward a year until end of year is reached
	// first time we call this function the year is 2008
	currentYear++;
	//alert(currentYear);
	var csvFile = "data/" + currentYear + "_monthly_inverted_relative.csv";
	draw(csvFile, "#one", currentYear);
}

function pathTween(d1, precision) {
  return function() {
    var path0 = this,
        path1 = path0.cloneNode(),
        n0 = path0.getTotalLength(),
        n1 = (path1.setAttribute("d", d1), path1).getTotalLength();

    // Uniform sampling of distance based on specified precision.
    var distances = [0], i = 0, dt = precision / Math.max(n0, n1);
    while ((i += dt) < 1) distances.push(i);
    distances.push(1);

    // Compute point-interpolators at each distance.
    var points = distances.map(function(t) {
      var p0 = path0.getPointAtLength(t * n0),
          p1 = path1.getPointAtLength(t * n1);
      return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
    }(d1));

    return function(t) {
      return t < 1 ? "M" + points.map(function(p) { return p(t); }).join("L") : d1;
    };
  };
}
function redraw(data, container, innerRadius, outerRadius){
	console.log("redraw");
	// update the y scale
	//y.domain([0, jz.arr.max(data.map(function(d){ return d.sum }))]);
	
	//State is key here, replace alphabet with State

	// each data column (a.k.a "key" or "series") needs to be iterated over
	//alphabet.forEach(function(key, key_index){

		//var bar = svg.selectAll(".bar-" + key)
		//  .data(stack(data)[key_index], function(d){ return d.data.name + "-" + key; });

		//bar
		//.transition()
		//  .attr("x", function(d){ return x(d.data.name); })
		//  .attr("y", function(d){ return y(d[1]); })
		//  .attr("height", function(d){ return y(d[0]) - y(d[1]); });
		//
		//bar.enter().append("rect")
		//  .attr("class", function(d){ return "bar bar-" + key; })
		//  .attr("x", function(d){ return x(d.data.name); })
		//  .attr("y", function(d){ return y(d[1]); })
		//  .attr("height", function(d){ return y(d[0]) - y(d[1]); })
		//  .attr("width", x.bandwidth())
		//  .attr("fill", function(d){ return color(key); })
		

	//});    

}