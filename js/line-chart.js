function drawLine(data, target, width, height, margin) {
	console.log(data);
	console.log('data above');
	
	var x = d3.scaleLinear().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);
	
	var xAxis = d3.axisBottom()
		.scale(x)
		.ticks(5);
	
	var yAxis = d3.axisLeft()
		.scale(y)
		.ticks(5);
	
	var valueline = d3.line()
		.x(function (d) {
			return x(d.month);
		})
		.y(function (d) {
			return y(d.bad_days);
		});
	
	var svg = d3.select(target)
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g");

	// Get the data
	
	// Scale the range of the data
	x.domain(d3.extent(data,
		function (d) {
			console.log(d.month);
			return d.month;
		}));
	y.domain([
		d3.min(data,
			function (d) {
				return d.bad_days;
			}),
		d3.max(data,
			function (d) {
				return d.bad_days;
			})
	]);
	
	svg.append("path") // Add the valueline path.
		.attr("d", valueline(data));
	
	svg.append("g") // Add the X Axis
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);
	
	svg.append("g") // Add the Y Axis
		.attr("class", "y axis")
		.call(yAxis);
}		
