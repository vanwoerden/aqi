var parseTime = d3.timeParse("%m/%d/%Y %H:%M");
var parseDay = d3.timeParse("%m/%d/%Y");

const AQI_threshold = 150;
const bad_hours_threshold = 5;

var _initial = true;

var _aqi = AQI_threshold;
var _low = 9;
var _high = 17;
var _hours = 0;
var _aqiSliderOffset = 45;
var d3data;
var _bad_days = 0;

var badDaysPerYear = [];
var months = [];
var years = [];
var _badDaysPerMonth = [];
var totalOutputArray = [];


//month arrays for bad days
var _2009 = [];
var _2010 = [];
var _2011 = [];
var _2012 = [];
var _2013 = [];
var _2014 = [];
var _2015 = [];
var _2016 = [];
var _2017 = [];
var _2018 = [];

var myChart;

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
var pieArray = ["pie-2009", "pie-2010", "pie-2011", "pie-2012", "pie-2013", "pie-2014", "pie-2015", "pie-2016", "pie-2017", "pie-2018"];
var mmmArray = [
				"#mmm-2009",
				"#mmm-2010",
				"#mmm-2011",
				"#mmm-2012",
				"#mmm-2013",
				"#mmm-2014",
				"#mmm-2015",
				"#mmm-2016",
				"#mmm-2017",
				"#mmm-2018"
				]
var csvs = [
{
	csv: "./data/beijing_2009_daily_for_bad_days.csv",
	target: "bad-number-2009",
	sparkTarget: "bad-days-2009",
	pieTarget: "pie-2009",
	monthsArray: "2009"
},
{
	csv: "./data/beijing_2010_daily_for_bad_days.csv",
	target: "bad-number-2010",
	sparkTarget: "bad-days-2010",
	pieTarget: "pie-2010",
	monthsArray: "2010"
},
{
	csv: "./data/beijing_2011_daily_for_bad_days.csv",
	target: "bad-number-2011",
	sparkTarget: "bad-days-2011",
	pieTarget: "pie-2011",
	monthsArray: "2011"
},
{
	csv: "./data/beijing_2012_daily_for_bad_days.csv",
	target: "bad-number-2012",
	sparkTarget: "bad-days-2012",
	pieTarget: "pie-2012",
	monthsArray: "2012"
},
{
	csv: "./data/beijing_2013_daily_for_bad_days.csv",
	target: "bad-number-2013",
	sparkTarget: "bad-days-2013",
	pieTarget: "pie-2013",
	monthsArray: "2013"
},
{
	csv: "./data/beijing_2014_daily_for_bad_days.csv",
	target: "bad-number-2014",
	sparkTarget: "bad-days-2014",
	pieTarget: "pie-2014",
	monthsArray: "2014"
},
{
	csv: "./data/beijing_2015_daily_for_bad_days.csv",
	target: "bad-number-2015",
	sparkTarget: "bad-days-2015",
	pieTarget: "pie-2015",
	monthsArray: "2015"
},
{
	csv: "./data/beijing_2016_daily_for_bad_days.csv",
	target: "bad-number-2016",
	sparkTarget: "bad-days-2016",
	pieTarget: "pie-2016",
	monthsArray: "2016"
},
{
	csv: "./data/beijing_2017_daily_for_bad_days.csv",
	target: "bad-number-2017",
	sparkTarget: "bad-days-2017",
	pieTarget: "pie-2017",
	monthsArray: "2017"
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


function initSliders(){
	csvs.forEach(function(e, index){
		aqi = AQI_threshold;
		hours = bad_hours_threshold;
		updateTheScore(aqi, hours, e.csv, e.target, e.sparkTarget, e.pieTarget, e.monthsArray);
		calculateMinMeanMax(e.csv, mmmArray[index]);
	});
	_initial = false;
	console.log('initsliders');
	console.log(document.getElementsByClassName("slider-hours")[0].valueLow);
	//loadData();
	// set initial positions
	//createPieCharts(pieArray);
	updatePollution();
	//updateSliders(150, 9, 17);
	
	function setPositions(aqi, low, high) {
		var hours = high - low;
		console.log("hours: " + hours);
		document.getElementById("max-aqi").style.marginTop = -Math.round((aqi/600) * 100) + 'px';
		updatePollution();
	}
	function updateSliders() {
		
		
	}
	function updatePollution() {
		console.log("updatePollution");
		console.log("AQI: " + _aqi);
		console.log("low: " + _low);
		console.log("high: " + _high);
		_hours = _high - _low;
		console.log("hours: " + _hours);
		document.getElementById("aqi-rectangle").style.height = (150 / 600 * _aqi) + 'px';
		document.getElementById("aqi-rectangle").style.width = (390 / 24 * _hours) + 'px';
		document.getElementById("aqi-rectangle").style.marginLeft = 1 + (390 / 24 * _low) + 'px';
		document.getElementById("high-hrs").style.marginLeft = (390 / 24 * _high) * 0.96 + 'px';
		document.getElementById("low-hrs").style.marginLeft = (390 / 24 * _low) * 0.99 + 'px';
		document.getElementById("max-aqi").style.marginTop = -Math.round((_aqi/600) * 150) * 0.92 - _aqiSliderOffset + 'px';
	}

	document.getElementById("slider-AQI").oninput = function() {
			_aqi = document.getElementById("slider-AQI").value; //gets the oninput value
			document.getElementById("max-aqi").innerHTML = _aqi;
			// change label position
			
			//document.getElementById("aqi-rectangle").style.height = (100 / 600 * aqi) + 'px';
			updatePollution();
	};
	document.getElementById("slider-AQI").onchange = function() {
			_aqi = document.getElementById("slider-AQI").value;
			_low = document.getElementsByClassName("slider-hours")[0].valueLow;
			_high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			//var hours = high - low;
			document.getElementById("max-aqi").innerHTML = _aqi;
			
			badDaysPerYear = [];
			months = [];
			years = [];
			
			csvs.forEach(function(e){
				updateTheScore(_aqi, _hours, e.csv, e.target, e.sparkTarget, e.pieTarget, e.monthsArrary);
			});
	};
	//update the hours slider value label
	document.getElementsByClassName("slider-hours")[1].oninput = function() {
			_low = document.getElementsByClassName("slider-hours")[0].valueLow;
			_high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			//var hours = high - low;
			//console.log(hours + "1");
			document.getElementById("max-hrs").innerHTML = _hours;
			updatePollution();
			
	};
	document.getElementsByClassName("slider-hours")[0].oninput = function() {
			_low = document.getElementsByClassName("slider-hours")[0].valueLow;
			_high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			//var hours = high - low;
			//console.log(hours + "0");
			
			document.getElementById("max-hrs").innerHTML = _hours;
			updatePollution();
			
	};
	document.getElementsByClassName("slider-hours")[1].onchange = function() {
			_low = document.getElementsByClassName("slider-hours")[0].valueLow;
			_high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			//var hours = high - low;
			
			_aqi = document.getElementById("slider-AQI").value;
			document.getElementById("max-hrs").innerHTML = _hours;
			
			badDaysPerYear = [];
			months = [];
			years = [];
			
			csvs.forEach(function(e){
				var bds = updateTheScore(_aqi, _hours, e.csv, e.target, e.sparkTarget, e.pieTarget, e.monthsArray);
			});
			//console.log('bds: ' + badDaysPerYear);
	};
	document.getElementsByClassName("slider-hours")[0].onchange = function() {
			_low = document.getElementsByClassName("slider-hours")[0].valueLow;
			_high = document.getElementsByClassName("slider-hours")[0].valueHigh;
			//_hours = high - low;
			
			_aqi = document.getElementById("slider-AQI").value;
			document.getElementById("max-hrs").innerHTML = _hours;
			
			badDaysPerYear = [];
			months = [];
			years = [];
			
			csvs.forEach(function(e){
				var bds = updateTheScore(_aqi, _hours, e.csv, e.target, e.sparkTarget, e.pieTarget, e.monthsArray);
			});
			//console.log('bds: ' + badDaysPerYear);
	};
	
	// finally run the first calculation with initial preset data
	
}
function calculateMinMeanMax(csv, target) {
	//currently calculating daily values which makes the chart very jagged
	d3.csv(csv, function(error, data) {
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
		
		var min = [];
		var mean = [];
		var max= [];
		
		var mmm = [];
		mmm = d3.nest()
			.key(function(d) {
				return d.date;
			})
			.rollup(function(v) {
				return [
						d3.min(v, function(d) {
							if(d.value > -1) {
									return d.value;
								} else return 0;
								}),
						d3.mean(v, function(d) { if(d.value > -1) {return d.value;} else return 0; }),
						d3.max(v, function(d) { if(d.value > -1) {return d.value;} else return 0; })
						];
			})
			.entries(data);
			
		console.log('min, mean, mx:');
		//console.log(mmm);
		
		var minMeanMax = [];
		
		mmm.forEach(function(item, index) {
			minMeanMax.push(item.value);
		})
		console.log(minMeanMax);
		drawMinMeanMax(minMeanMax, target);
		
		var totalOutput = [];
		totalOutput = d3.nest()
			.key(function(d) {
				return d.year;
			})
			.rollup(function(v) {
				return d3.sum(v, function(d) {
							if(d.value > -1) {
									return d.value;
								} else return 0;
								})
			})
			.entries(data);
		totalOutputArray.push(totalOutput);
		console.log("total pm2.5 output: ");
		console.log(totalOutputArray);
	})
}
function updateTheScore(aqi, hours, csv, target, sparkTarget, pieTarget, monthsArray) {
	console.log("******** UPDATE SCORE csv = " + csv);
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
				bad_hours: v.filter(function(d){
					return d.value > aqi;
				}).length
			}; })
			.entries(d3data);
		
		var bad_days = 0;
		//console.log("badHoursPerDay: " + badHoursPerDay);
		badHoursPerDay.forEach(function(item, index){
		
			if(item.value.bad_hours > hours) {
				// this is a bad day
				bad_days++;
			}
		});

		document.getElementById(target).innerHTML = bad_days;
		badDaysPerYear.push(bad_days);
		console.log("_initial = " + _initial);
		if(_initial) {
			// new
			createPieChart(pieTarget);
		} else {
			//update
			updateChart(pieTarget);
		}
		
		function updateChart(chart) {
			// do the update
			console.log('updating the pie chart');
		}

		//let's see how many bad days each month
		var badHoursPerMonth = [];
		var bad_dayss = 0;
		
		badHoursPerMonth = d3.nest()
			//.key(function(d) { return d.year; })
			.key(function(d) { return d.month; })
			.key(function(d) { return d.day; })
			.rollup(function(v) { return {    
				//count: v.length,
				bad_hours: v.filter(function(d){
					//console.log(d.value);
					return d.value > aqi;
				}).length
			}; })
			.entries(d3data);
		
		var badDaysPerMonth = [];
		var percents = [];
		badHoursPerMonth.forEach(function(month, index){
			// make another recursion for each month
			var bad_days_month = 0;
			var badDaysForOneMonth = month.values;
			
			badDaysForOneMonth.forEach(function(day, index) {
				// loop through the days
				if(day.value.bad_hours > hours) {
					// Houston, we have a bad day
					bad_days_month++;
				}
			})
			
			var bdm = {};
			bdm.month = index + 1;
			bdm.bad_days = bad_days_month;
			
			//need to percentify for sparklines
			
			badDaysPerMonth.push(bdm.bad_days);
			
			//badDaysPerMonth.forEach(function(item, index){
			//	
			//})
			
			var max = Math.max.apply(Math, badDaysPerMonth); // picks out 5000
			percents = badDaysPerMonth.map(n => Math.round(n/max * 100));
			
			document.getElementById(sparkTarget).innerHTML = "{" + percents + "}";
			
			
			//console.log("bdm: ");
			//console.log(bdm);
		});
		
		switch(monthsArray) {
			case "2009":
				console.log("switch " + monthsArray);
				_2009 = badDaysPerMonth;
				break;
			case "2010":
				console.log("switch " + monthsArray);
				_2010 = badDaysPerMonth;
				break;
			case "2011":
				console.log("switch " + monthsArray);
				_2011 = badDaysPerMonth;
				break;
			case "2012":
				console.log("switch " + monthsArray);
				_2012 = badDaysPerMonth;
				break;
			case "2013":
				console.log("switch " + monthsArray);
				_2013 = badDaysPerMonth;
				break;
			case "2014":
				console.log("switch " + monthsArray);
				_2014 = badDaysPerMonth;
				break;
			case "2015":
				console.log("switch " + monthsArray);
				_2015 = badDaysPerMonth;
				break;
			case "2016":
				console.log("switch " + monthsArray);
				_2016 = badDaysPerMonth;
				break;
			case "2017":
				console.log("switch " + monthsArray);
				_2017 = badDaysPerMonth;
				break;
			case "2018":
				console.log("switch " + monthsArray);
				_2018 = badDaysPerMonth;
				break;
		}
		//showDifferenceBetweenYears(_2016, _2010);
		function showDifferenceBetweenYears(year1, year2) {
			console.log("************** showDifferenceBetweenYears");
			console.log(year1);
			console.log(year2);
			var diff = year2.map(function(item, index) {
				// In this case item correspond to currentValue of array a, 
				// using index to get value from array b
				return item - year1[index];
			})
			console.log("the diff");
			console.log(diff);
			// now create an array of coordinates from this array
			var coordinates = [];
			var arr = [];
			diff.forEach(function(item, index) {
				var xy = {};
				xy.month = index+1;
				xy.bad_days = item;
				coordinates.push(xy);
				arr.push(item);
			});
			console.log(coordinates);
			console.log('coords aboove');
			
			//drawLine(coordinates, "#compare-bad-days-chart", 600, 100, 0);
			// send array to sparkline difference div
			
			var targetID = "difference-" + sparkTarget.substr(-4)
			console.log(targetID);
			document.getElementById(targetID).innerHTML = "{" + arr + "}";
		}
		
		//var eachMonthsArray = {};
		//eachMonthsArray.bad_days = badDaysPerMonth;
		//eachMonthsArray.id = monthsArray; // bad_days_2015
		
		
	})
	
	console.log("months: ");
	console.log(months);
	//console.log("month1 bad days: " + months[0].id);
	
}
console.log("2015: ");
console.log(_2015);
console.log("months2 length: " + months.length);
function onParseComplete() {
	showDifferenceBetweenYears(months[2].bad_days, months[months.length-1].bad_days);
}
function createPieChart(chart) {
	console.log('create pie chart');
	// draw pie charts with bad days
	var ctx = document.getElementById(item).getContext("2d");
	//ctx.height = 50;
	//ctx.width = 25;
	myChart = {};	
	myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			
			datasets: [{
				label: '',
				data: [bad_days, 365-bad_days],
				backgroundColor: [
					'#000',
					'#fff'
				],
				borderColor: [
					'#000',
					'#999'
				],
				borderWidth: 1
			}]
		},
		options: {
			maintainAspectRatio: false,
			responsive: false,
			scales: {
				yAxes: [{
					display: false,
					stacked: true
				}],
				xAxes: [{
					display: false,
					stacked: true
				}]
			},
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			}
		}
	});
	
}

//drawHeatmap();
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