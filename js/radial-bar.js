var currentYear = "2008";

function calculateRelativePollution(csv) {
	d3.csv(csv).then(function(data){
		// create 6 arrays
		var arr_0_50 = [],
		arr_50_100 = [],
		arr_100_150 = [],
		arr_150_200 = [],
		arr_200_300 = [],
		arr_300 = [],
		arr_invalid = [];
		
		// sort data by month
		arr_0_50 = d3.nest()
			.key(function(d) { return d.month; })
			.rollup(function(v) { return {    
				bad_hours: v.filter(function(d){
					return d.value < 50;
				}).length
			}; })
			.entries(data);
			
		console.log("arr-0_50");
		console.log(arr_0_50);
	});
}
function draw(csvFile, target, year) {
	console.log(target);
	var svg = d3.select(target),
	width = +svg.attr("width"),
	height = +svg.attr("height"),
	innerRadius = 30,
	outerRadius = 190,
	g = svg.append("g")
		.attr("class", "first-g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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
			"#f5f5f5"
			]); // range inverted
	
	d3.csv(csvFile, function(d, i, columns) {
		for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
		d.total = t;
		return d;
	}).then(function(data) {
		console.log("this is the data; " + data);
		x.domain(data.map(function(d) { return d.State; }));
		y.domain([0, d3.max(data, function(d) { return d.total; })]);
		z.domain(data.columns.slice(1));
		
		var seg = g.append("g")
			.attr("class", "bar-cont")
			.selectAll("g")
			.data(d3.stack()
						.keys(data.columns.slice(1))
						(data))
			.enter().append("g")	
				.attr("class", "segment-g")
				.attr("fill", function(d) { return z(d.key); })
			.selectAll("path")
			.data(function(d) { return d; })
			.enter().append("path")
				.attr("d", d3.arc()
						.innerRadius(function(d) { return y(d[0]); })
						.outerRadius(function(d) { return y(d[1]); })
						.startAngle(function(d) { return x(d.data.State); })
						.endAngle(function(d) { return x(d.data.State) + x.bandwidth(); })
						.padAngle(0.01)
						.padRadius(innerRadius));

	});
}