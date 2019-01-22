function drawMinMeanMax(data, target) {
	//note:
    //avg != (min+max)/2
    //it can be anything between min and max
  
    var data2 = [
    //[min,avg,max]//
      [10, 22, 54],
      [15, 35, 87],
      [13, 44, 55],
      [9,  37, 76],
      [30, 63, 75],
      [22, 44, 53],
      [18, 51, 65],
    ];
    
    var setup = {
      width: 1200,
      height: 150,
      margin: 20
    }
    
    var svg = d3.select(target)
      .attr("width", setup.width)
      .attr("height", setup.height);

    var x = d3.scaleLinear()
    	.domain([0,data.length-1])
	    .range([setup.margin,setup.width-setup.margin]);
    
    var y = d3.scaleLinear()
    	.domain([0,700])
    	.range([setup.margin,setup.height-setup.margin]);
  
    var xAxis = d3.axisBottom()
    	.scale(x);
		
    var min = (d) => y(d[0]);
    var max = (d) => y(d[2]);
    var avg = (d) => y(d[1]);
    
    svg.append('g')
	    .attr('transform','translate('+[0,(setup.height-setup.margin)]+')')
    	.call(xAxis);
        
    var area = d3.area()
    	.x((d,i)=>x(i))
    	.y0((d) => setup.height-max(d))
    	.y1((d) => setup.height-min(d))
			.curve(d3.curveNatural);
    
    var line = d3.line()
    	.x((d,i)=>x(i))
    	.y((d) => setup.height-avg(d))
			.curve(d3.curveNatural);

    
    svg.append('path')
    	.attr('d', area(data))
    	.attr('fill', '#ddd');
    
    svg.append('path') 
    	.attr('d', line(data))
    	.attr('stroke', 'blue')
	    .attr("fill", "none")
		.attr("opacity", 0.5)
	    .attr('stroke-width', 1);
    		
}