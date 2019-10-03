console.log("weather.js");
var margin = {top: 20, right: 0, bottom: 30, left: 0},
//var margin = 0;
    width = 960 - margin.left - margin.right,
    //width = "90%",
height = 120 - margin.top - margin.bottom;
//var formatDate = d3.time.format("%Y-%m-%d %H:%M:%S");
var formatDate = d3.time.format("%d.%m.%Y %H:%M");
var x = d3.time.scale()
    .range([0, width]);
var y = d3.scale.linear()
    .range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .ticks(5)
    .orient("left");
    
var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.temp); });
    
var line = d3.svg.line()
    //.curve(d3.curveCatmullRomOpen)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temp); })
    .interpolate("basis");

var svg = d3.select("#weather").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
d3.csv("../data/beijing_weather_2016.csv", type, function(error, data) {
  if (error) throw error;
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.temp; }));
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  svg.append("g")
      .attr("class", "y axis")
      .attr("stroke-width", "1px")
      .call(yAxis)
    .append("text")
      //.attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("temperature (C)");
  svg.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("fill", "#ccc")
      .attr("d", area);
});
function type(d) {
  d.date = formatDate.parse(d.date);
  d.temp = +d.temp;
  return d;
}