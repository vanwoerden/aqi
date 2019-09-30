console.log("calendar.js");
// aqi breaks var breaks=[50,100,150,200,300];
var breaks=[1,2,4,6,8,12,16,20];
//var colours=["#BFF5DB", "#F7DB76", "#E8A945", "#D1324C", "#880D1E", "#242038"];
//var colours=["#BFF5DB", "#AEDFC8", "#9DC9B4", "#8BB3A0", "#7A9C8C", "#6F8E80", "#648073", "#597266", "#4E645A", "#43564D", "#384740", "#33413B"];
//var colours=["#ADF4D2", "#AEDFC8", "#9DC9B4", "#F7DB76", "#ECB866", "#E8A945", "#D1324C", "#BE2E46", "#880D1E", "#880D1E", "#242038", "#33413B"];
var colours = ['#f7fcf0','#e0f3db','#ccebc5','#a8ddb5','#7bccc4','#4eb3d3','#2b8cbe','#0868ac','#084081'];
  
//general layout information
var cellSize = 17;
var xOffset=0;
var yOffset=20;
var calY=50;//offset of calendar in each group
var calX=25;
var width = 960;
var height = 163;
var parseDate = d3.time.format("%m/%d/%Y").parse;
var format = d3.time.format("%Y/%m/%d");
var toolDate = d3.time.format("%m/%d/%Y");
var parseDay = d3.time.format("%m/%d/%Y");

var weekXPos = [];

var initAQI = 150; // target AQI set by user
var _aqi;
var _duration;
var units=" hours for which PM2.5 exceeds " + initAQI;
var initDuration = 8; // max hours of below targetAQI duration

function createWeekBlocks() {
    for (var i = 0; i < 53; i++) {
        var rect = document.createElement('div');
        rect.className = "week-rect";
        rect.id = "week-" + (i+1);
        rect.style.width = cellSize;
        rect.style.height = cellSize;
        rect.width = cellSize;
        document.getElementById("weeks-container").appendChild(rect);
    }
}
createWeekBlocks();
function updateCalendar(targetAQI, targetDuration) {
    //console.log("updateCalendar: aqi = " + targetAQI);
    d3.csv("data/beijing_2016_daily_for_bad_days.csv", function(error, data) {
  
        data.forEach(function(d) {
            d.date= d.date;
            if(d.value<0){d.value = -1;}
            d.year=+d.year;
            d.month = +d.month;
            d.day = +d.day;
            d.hour = +d.hour;
            d.value = +d.value;
        });
        
        var yearlyData = d3.nest()
            .key(function(d){return d.year;})
            .entries(data);
  
    
        var badHoursPerDay = [];
        badHoursPerDay = d3.nest()
            .key(function(d) { return d.year; })
            .key(function(d) { return d.date; })
            .rollup(function(v) { return {    
                value: v.filter(function(d){
                    return d.value > targetAQI;
                }).length
            }; })
            .entries(data);
        
        var badHoursPerWeek = d3.nest()
            .key(function(d) { return d3.time.weekOfYear(parseDate(d.date)); })
            .key(function(d) { return d.day; })
            .rollup(function(v) { return {    
                //count: v.length,
                bad_hours: v.filter(function(d){
                    return d.value > targetAQI;
                }).length
            }; })
            .entries(data);
        
        var badDaysPerWeek = [];
        badHoursPerWeek.forEach(function(week, index) {
            var bad_days_week = 0;
            
            week.values.forEach(function(day, index) {
                if(day.values.bad_hours > targetDuration) {
                    // bad day
                    bad_days_week++;
                }
            });
            //document.getElementById("week-"+(index+1)).innerHTML = bad_days_week;
            var bar = document.getElementById("week-"+(index+1));
            var h = 1 + bad_days_week * 10 + "px";

            TweenMax.to(bar, 0.3, { height: h});
        });
        
        // calculate and plot bad hours for each month
        var badHoursPerMonth = [];
        badHoursPerMonth = d3.nest()
            //.key(function(d) { return d.year; })
            .key(function(d) { return d.month; })
            .key(function(d) { return d.day; })
            .rollup(function(v) { return {    
                //count: v.length,
                bad_hours: v.filter(function(d){
                    return d.value > targetAQI;
                }).length
            }; })
            .entries(data);
        
        
        var badDaysPerMonth = [];
        var percents = [];
        badHoursPerMonth.forEach(function(month, index){
            // make another recursion for each month
            var bad_days_month = 0;
            var badDaysForOneMonth = month.values;
            
            badDaysForOneMonth.forEach(function(day, index) {
                // loop through the days
                if(day.values.bad_hours > targetDuration) {
                    // Houston, we have a bad day
                    bad_days_month++;
                }
            });
            
            var bdm = {};
            bdm.month = index + 1;

            bdm.bad_days = bad_days_month;
            
            //need to percentify for sparklines
            badDaysPerMonth.push(bdm.bad_days);
            
            var max = Math.max.apply(Math, badDaysPerMonth); // picks out 5000
            percents = badDaysPerMonth.map(n => Math.round(n/max * 100));
            
            document.getElementById(index).innerHTML = bad_days_month;
        });
        
        var bad_days = 0;
        badHoursPerDay.forEach(function(item, index){
            if(item.values.bad_hours > targetDuration) {
                // this is a bad day
                bad_days++;
            }
        });

        d3.select("#calendar").remove();
        var svg = d3.select("#calendar-container").append("svg")
            .attr("width","100%")
            //.attr("viewBox","0 0 "+(xOffset+width)+" 2500")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox","0 0 960 200")
            .attr("id", "calendar")

        //create an SVG group for each year
        var cals = svg.selectAll("g")
            .data(badHoursPerDay)
            .enter()
            .append("g")
            .attr("id",function(d){
                return d.key;
            })
            .attr("transform",function(d,i){
                return "translate(0,"+(yOffset+(i*(height+calY)))+")";  
            })
        
        var labels = cals.append("text")
            .attr("class","yearLabel")
            .attr("x",xOffset)
            .attr("y",25)
            .text(function(d){return d.key});
        
        //create a daily rectangle for each year
        var rects = cals.append("g")
            .attr("id","alldays")
            .selectAll(".day")
            .data(function(d) { return d3.time.days(new Date(parseInt(d.key), 0, 1), new Date(parseInt(d.key) + 1, 0, 1)); })
            .enter().append("rect")
            .attr("id",function(d) {
                return "_"+format(d);
                //return parseDate(d.date)+":\n"+d.value+" dead or missing";
            })
            .attr("class", "day")
            .attr("width", cellSize)
            .attr("height", cellSize)
            .attr("x", function(d) {
                return xOffset+calX+(d3.time.weekOfYear(d) * cellSize);
            })
            .attr("y", function(d) { return calY+(d.getDay() * cellSize); })
            .datum(format);
        
        //create day labels
        var days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
        var dayLabels=cals.append("g").attr("id","dayLabels")
        days.forEach(function(d,i)    {
            dayLabels.append("text")
            .attr("class","dayLabel")
            .attr("x",xOffset)
            .attr("y",function(d) { return calY+(i * cellSize); })
            .attr("dy","0.9em")
            .text(d);
        })
        
        //let's draw the data on
         
        var dataRects = cals.append("g")
            .attr("id","dataDays")
            .selectAll(".dataday")
            .data(function(d){
                return d.values;
            })
            .enter()
            .append("rect")
            .attr("id",function(d) {
                //return format(d.date)+":"+d.value;
                return d.date;
            })
            .attr("stroke","#000")
            .attr("stroke-width","0.4px")
            .attr("width",cellSize)
            .attr("height",cellSize)
            .attr("x", function(d){
                var xPos = xOffset+calX+(d3.time.weekOfYear(parseDate(d.key)) * cellSize);
                weekXPos.push(xPos);
                return xOffset+calX+(d3.time.weekOfYear(parseDate(d.key)) * cellSize);
            })
            .attr("y", function(d) { return calY+(parseDate(d.key).getDay() * cellSize); })
            .attr("fill", function(d) {
                if (d.values.value<0) {
            return "#ffffff";
                } else
        if (d.values.value<breaks[0]) {
                    return colours[0];
                } 
                for (i=0;i<breaks.length+1;i++){
                    if (d.values.value>=breaks[i]&&d.values.value<breaks[i+1]){
                        return colours[i+1];
                    }
                }
                if (d.values.value>breaks.length-1){
                    return colours[breaks.length]   
                }
            })
        
        //append a title element to give basic mouseover info
        dataRects.append("title")
            .text(function(d) { return parseDate(d.key)+":\n"+d.values.value+units; });
        
        //add montly outlines for calendar
        cals.append("g")
        .attr("id","monthOutlines")
        .selectAll(".month")
        .data(function(d) { 
            return d3.time.months(new Date(parseInt(d.key), 0, 1),
                                  new Date(parseInt(d.key) + 1, 0, 1)); 
        })
        .enter().append("path")
        .attr("class", "month")
        .attr("transform","translate("+(xOffset+calX)+","+calY+")")
        .attr("d", monthPath);
        
        //retreive the bounding boxes of the outlines
        var BB = new Array();
        var mp = document.getElementById("monthOutlines").childNodes;
        for (var i=0;i<mp.length;i++){
            BB.push(mp[i].getBBox());
        }
        
        var monthX = new Array();
        BB.forEach(function(d,i){
            boxCentre = d.width/2;
            monthX.push(xOffset+calX+d.x+boxCentre);
        })
    
        //create centred month labels around the bounding box of each month path
        //create day labels
        var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        var monthLabels=cals.append("g").attr("id","monthLabels")
        months.forEach(function(d,i)    {
            monthLabels.append("text")
            .attr("class","monthLabel")
            .attr("x",monthX[i])
            .attr("y",calY/1.2)
            .text(d);
        })
        
         //create legend
        var key = svg.append("g")
            .attr("id","calendar-legend")
            .attr("class","key")
            .attr("transform",function(d){
                return "translate("+(width-20)+","+(yOffset*3.4)+")";
            });
        
        key.selectAll("rect")
            .data(colours)
            .enter()
            .append("rect")
            .attr("width",cellSize/1.5)
            .attr("height",cellSize/1.5)
            .attr("y",function(d,i){
                return i*15;
            })
            .attr("fill",function(d){
                return d;
            });
        
        key.selectAll("text")
            .data(colours)
            .enter()
            .append("text")
            .attr("y",function(d,i){
                return 9+(i*15);
            })
            .attr("x","2em")
            .text(function(d,i){
                if (i == 0){
            return "0";
        }
        else if (i<colours.length-1){
                    return breaks[i-1]+"-"+breaks[i];
                }   else    {
                    return "over "+breaks[i-1] + " hours with PM2.5 exceeding " + targetAQI;   
                }
            });
    });//end data load
}

//pure Bostock - compute and return monthly path data for any year
function monthPath(t0) {
  var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(), w0 = d3.time.weekOfYear(t0),
      d1 = t1.getDay(), w1 = d3.time.weekOfYear(t1);
  return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
      + "H" + w0 * cellSize + "V" + 7 * cellSize
      + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
      + "H" + (w1 + 1) * cellSize + "V" + 0
      + "H" + (w0 + 1) * cellSize + "Z";
}


/*****
 *
 * Slider stuff
 *
 */
document.getElementById("slider-aqi-best-time").oninput = function() {
    //sliderThrottle();
    _aqi = document.getElementById("slider-aqi-best-time").value; //gets the oninput value
    _duration = document.getElementById("slider-hours-best-time").value;
    document.getElementById("target-aqi").innerHTML = _aqi;
    updateCalendar(_aqi, _duration);
};
document.getElementById("slider-aqi-best-time").onchange = function() {
    _aqi = document.getElementById("slider-aqi-best-time").value;
    //mixpanel.track("Slider Updated", {"type": "AQI"});
    console.log("slider aqi");
};
document.getElementById("slider-hours-best-time").oninput = function() {
    //sliderThrottle();
    _aqi = document.getElementById("slider-aqi-best-time").value; //gets the oninput value
    _duration = document.getElementById("slider-hours-best-time").value;
    document.getElementById("target-duration").innerHTML = _duration;
    updateCalendar(_aqi, _duration);
};
document.getElementById("slider-hours-best-time").onchange = function() {
    _duration = document.getElementById("slider-hours-best-time").value;
    //mixpanel.track("Slider Updated", {"type": "duration"});
    
     console.log("slider duration");
};
//throttle function
var sliderThrottle = debounce(function() {
	_aqi = document.getElementById("slider-aqi-best-time").value; //gets the oninput value
    document.getElementById("target-aqi").innerHTML = _aqi;
    updateCalendar(_aqi, initDuration);
}, 50);
//updateCalendar(100, 8);
document.getElementById("target-aqi").innerHTML = 100;
document.getElementById("target-duration").innerHTML = 8;
updateCalendar(100, 8);


/*******
 * HELPERS
 */

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};