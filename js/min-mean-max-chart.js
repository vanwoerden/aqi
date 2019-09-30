function drawMinMeanMax(data, target) {
	//note:
    //avg != (min+max)/2
    //it can be anything between min and max
    //console.log('drawminmenamax en target ' + target);
  
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
      width: 245,
      height: 150,
      margin: 20
    };
    
    var svg = d3.select(target)
      .attr("width", setup.width)
      .attr("height", setup.height);

    var x = d3.scaleLinear()
    	.domain([1,12])
	    .range([0,setup.width]);
    
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
        //.attr('transform','translate('+[0,(600)]+')')
    	.call(xAxis);
        
    var area = d3.area()
    	.x((d,i)=>x(i))
    	.y0((d) => setup.height-max(d))
    	.y1((d) => setup.height-min(d))
			.curve(d3.curveCatmullRomOpen);
    
    var line = d3.line()
    	.x((d,i)=>x(i))
    	.y((d) => setup.height-avg(d))
			.curve(d3.curveCatmullRomOpen);

    
    svg.append('path')
    	.attr('d', area(data))
    	.attr('fill', '#ddd');
    
    svg.append('path') 
    	.attr('d', line(data))
    	.attr('stroke', '#aaa')
	    .attr("fill", "none")
		.attr("opacity", 0.5)
	    .attr('stroke-width', 2);
    		
}