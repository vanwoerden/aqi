var parseTime = d3.timeParse("%m/%d/%Y %H:%M");
var parseDay = d3.timeParse("%m/%d/%Y");

var AQI_threshold = 180;
var bad_hours_threshold = 5;

var d3data;
var _bad_days = 0;

var badDaysPerYear = [];

var sparkContent = "1{2,4,6,9,6,2,12,10,8,10,6,12}12";
	
	var rangeMaxes = [
		{
				label: "0 - 50",
				min: 0,
				max: 50
		},
		{
				label: "50 - 100",
				min: 50,
				max: 100
		},
		{
				label: "100 - 150",
				min: 100,
				max: 150
		},
		{
				label: "150 - 200",
				min: 150,
				max: 200
		},
		{
				label: "200 - 300",
				min: 200,
				max: 300
		},
		{
				label: "300+",
				min: 300,
				max: 1001
		},
		
	]

var csvs = [
{
	csv: "./data/beijing_2009_daily_for_bad_days.csv",
	target: "bad-number-2009"
},
{
	csv: "./data/beijing_2010_daily_for_bad_days.csv",
	target: "bad-number-2010"
},
{
	csv: "./data/beijing_2011_daily_for_bad_days.csv",
	target: "bad-number-2011"
},
{
	csv: "./data/beijing_2012_daily_for_bad_days.csv",
	target: "bad-number-2012"
},
{
	csv: "./data/beijing_2013_daily_for_bad_days.csv",
	target: "bad-number-2013"
},
{
	csv: "./data/beijing_2014_daily_for_bad_days.csv",
	target: "bad-number-2014"
},
{
	csv: "./data/beijing_2015_daily_for_bad_days.csv",
	target: "bad-number-2015"
},
{
	csv: "./data/beijing_2016_daily_for_bad_days.csv",
	target: "bad-number-2016"
},
{
	csv: "./data/beijing_2017_daily_for_bad_days.csv",
	target: "bad-number-2017"
}
]

/* Draw a heatmap that shows for all data we feed in, what are the worst hours during the 24h day
 *
 * 1. load CSV
 * 2. sort the data into brackets. We need the following format: hour (0-23), pm2.5 bracket (for example 0-50), count (how many readings in that bracket at that hour)
 * 3. display in daily format
 * 4. add dropdown or control to select the year, or date range
 * 
 */

/* SLIDER STUFF */
csvs.forEach(function(e){
	aqi = AQI_threshold;
	hours = bad_hours_threshold;
	updateTheScore(aqi, hours, e.csv, e.target);
});

function initSliders(){
	console.log('initsliders');
	console.log(document.getElementsByClassName("slider-hours")[0].valueLow);
	//loadData();

	document.getElementById("slider-AQI").oninput = function() {
			var aqi = document.getElementById("slider-AQI").value; //gets the oninput value
			document.getElementById("max-aqi").innerHTML = aqi;
	};
	document.getElementById("slider-AQI").onchange = function() {
			var aqi = document.getElementById("slider-AQI").value;
			var low = document.getElementsByClassName("slider-hours")[0].valueLow;
			var high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			var hours = high - low;
			document.getElementById("max-aqi").innerHTML = aqi;
			
			csvs.forEach(function(e){
				updateTheScore(aqi, hours, e.csv, e.target);
				
			});
	};
	//update the hours slider value label
	document.getElementsByClassName("slider-hours")[1].oninput = function() {
			var low = document.getElementsByClassName("slider-hours")[0].valueLow;
			var high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			var hours = high - low;
			console.log(hours + "1");
			document.getElementById("max-hrs").innerHTML = hours;
	};
	document.getElementsByClassName("slider-hours")[0].oninput = function() {
			var low = document.getElementsByClassName("slider-hours")[0].valueLow;
			var high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			var hours = high - low;
			console.log(hours + "0");
			
			document.getElementById("max-hrs").innerHTML = hours;
	};
	document.getElementsByClassName("slider-hours")[1].onchange = function() {
			var low = document.getElementsByClassName("slider-hours")[0].valueLow;
			var high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			var hours = high - low;
			
			var aqi = document.getElementById("slider-AQI").value;
			document.getElementById("max-hrs").innerHTML = hours;
			
			badDaysPerYear = [];
			csvs.forEach(function(e){
				var bds = updateTheScore(aqi, hours, e.csv, e.target);
			});
			//console.log('bds: ' + badDaysPerYear);
	};
	document.getElementsByClassName("slider-hours")[0].onchange = function() {
			var low = document.getElementsByClassName("slider-hours")[0].valueLow;
			var high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			var hours = high - low;
			
			var aqi = document.getElementById("slider-AQI").value;
			document.getElementById("max-hrs").innerHTML = hours;
			
			badDaysPerYear = [];
			
			csvs.forEach(function(e){
				var bds = updateTheScore(aqi, hours, e.csv, e.target);
			});
			//console.log('bds: ' + badDaysPerYear);
	};
	
	// finally run the first calculation with initial preset data
	
}

function updateTheScore(aqi, hours, csv, target) {
	console.log("update score");
	d3.csv(csv, function(error, data) {
			if (error) throw error;
			
			d3data = data;
			
			d3data.forEach(function(d) {
				d.date = parseDay(d.date);
				d.year = +d.year;
				d.month = +d.month;
				d.day = +d.day;
				d.hour = +d.hour;
				d.value = +d.value;
			});
			
			var badHoursPerDay = [];

			badHoursPerDay = d3.nest()
				.key(function(d) { return d.date; })
				.rollup(function(v) { return {    
					//count: v.length,
					bad_hours: v.filter(function(d){
						//console.log(d.value);
						return d.value > aqi;
					}).length
				}; })
				.entries(d3data);
			
			var bad_days = 0;
			badHoursPerDay.forEach(function(item, index){
			
				if(item.value.bad_hours > hours) {
						// this is a bad day
						//console.log('val: ' + item.value.bad_hours + ' and hours: ' + hours);
						bad_days++;
						//console.log("bad days " + bad_days);
				}
			});
			//console.log("bad_days: " + bad_days);

			document.getElementById(target).innerHTML = bad_days;
			//_bad_days = bad_days;
			//console.log("selcteh dagen: " + bad_days);
			badDaysPerYear.push(bad_days);
			//return bad_days;
	});
	//console.log("selcteh dagen: " + _bad_days);
	//console.log("selcteh dagen: " + badDaysPerYear);
}

drawHeatmap();
function drawHeatmap() {
	// we will need a count for every hour of the day, for all 6 AQI ranges, so that's 24 * 6 = 144 values to calculate
	console.log("drawheatmap");
	d3.csv(csvs[8].csv, function(error, data) {
			if (error) throw error;
			
			//d3data = data;
			
			data.forEach(function(d) {
				d.date = parseDay(d.date);
				d.year = +d.year;
				d.month = +d.month;
				d.day = +d.day;
				d.hour = +d.hour;
				d.value = +d.value;
			});
			
			var countsPerHour = [];

			countsPerHour = d3.nest()
				// key should be hour of the day
				// let's try to get all values converted to ranges
				//and we need the converted data in this format: [{"year":"2017","range":"0-50","hour":1,"value":1},
				//																								{"year":"2017","range":"0-50","hour":2,"value":9}]
				.key(function(d) { return d.hour+1; })
				.rollup(function(v) { return {    

					max1: v.filter(function(d){
						return d.value < 51;
					}).length,
					max2: v.filter(function(d){
						return d.value > 50 && d.value < 101;
					}).length,
					max3: v.filter(function(d){
						return d.value > 100 && d.value < 151;
					}).length,
					max4: v.filter(function(d){
						return d.value > 150 && d.value < 201;
					}).length,
					max5: v.filter(function(d){
						return d.value > 200 && d.value < 301;
					}).length,
					max6: v.filter(function(d){
						return d.value > 300;
					}).length
				}; })
				.entries(data);
			
			// now we should start drawing the heatmap
			var heatmapJSON = [];
			countsPerHour.forEach(function(item, index){
				// let's add everything to our JSON object
				//console.log('len ' );
			//	console.log(JSON.parse(item.value).length);
				var i;
				
				for (i = 0; i < 6; i++) {
					switch(i) {
						case 0:
							v = item.value.max1;
							r = 6;
							break;
						case 1:
							v = item.value.max2;
							r = 5;
							break;
						case 2:
							v = item.value.max3;
							r = 4;
							break
						case 3:
							v = item.value.max4;
							r = 3;
							break;
						case 4:
							v = item.value.max5;
							r = 2;
							break;
						case 5:
							v = item.value.max6;
							r = 1;
							break;
					}
					var cell = {
					year : 2017,
					range : r,
					hour : item.key,
					value : v
					};
					//console.log(cell);
					heatmapJSON.push(cell);
				}
				
			});
			//console.log('heatmapJSON: ');
			//console.log(heatmapJSON);
			//console.log(JSON.stringify(heatmapJSON));
	});
	//drawTheActualHeatMap();
}