var parseTime = d3.timeParse("%m/%d/%Y %H:%M");
var parseDay = d3.timeParse("%m/%d/%Y");

const AQI_threshold = 10;
const bad_hours_threshold = 23.9;

var _initial = true;
var _bad_days_initial = true;

var _aqi = AQI_threshold;
var _low = 0;
var _high = 23.9;
var _hours = 0;
var _aqiSliderOffset = 45;
var d3data;
var _bad_days = 0;

var badDaysMonthly = [];

var badDaysPerYear = [];
var months = [];
var years = [];
var _badDaysPerMonth = [];
var totalOutputArray = [];
var annualMeans = [];


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
		
	];
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
				"#mmm-2018",
				"#mmm-2019"
				];
var csvs = [
{
	csv: "../data/beijing_2008_daily_for_bad_days.csv",
	target: "bad-number-2008",
	sparkTarget: "bad-days-2008",
	pieTarget: "pie-2008",
	monthsArray: "2008"
},
{
	csv: "../data/beijing_2009_daily_for_bad_days.csv",
	target: "bad-number-2009",
	sparkTarget: "bad-days-2009",
	pieTarget: "pie-2009",
	monthsArray: "2009"
},
{
	csv: "../data/beijing_2010_daily_for_bad_days.csv",
	target: "bad-number-2010",
	sparkTarget: "bad-days-2010",
	pieTarget: "pie-2010",
	monthsArray: "2010"
},
{
	csv: "../data/beijing_2011_daily_for_bad_days.csv",
	target: "bad-number-2011",
	sparkTarget: "bad-days-2011",
	pieTarget: "pie-2011",
	monthsArray: "2011"
},
{
	csv: "../data/beijing_2012_daily_for_bad_days.csv",
	target: "bad-number-2012",
	sparkTarget: "bad-days-2012",
	pieTarget: "pie-2012",
	monthsArray: "2012"
},
{
	csv: "../data/beijing_2013_daily_for_bad_days.csv",
	target: "bad-number-2013",
	sparkTarget: "bad-days-2013",
	pieTarget: "pie-2013",
	monthsArray: "2013"
},
{
	csv: "../data/beijing_2014_daily_for_bad_days.csv",
	target: "bad-number-2014",
	sparkTarget: "bad-days-2014",
	pieTarget: "pie-2014",
	monthsArray: "2014"
},
{
	csv: "../data/beijing_2015_daily_for_bad_days.csv",
	target: "bad-number-2015",
	sparkTarget: "bad-days-2015",
	pieTarget: "pie-2015",
	monthsArray: "2015"
},
{
	csv: "../data/beijing_2016_daily_for_bad_days.csv",
	target: "bad-number-2016",
	sparkTarget: "bad-days-2016",
	pieTarget: "pie-2016",
	monthsArray: "2016"
},
{
	csv: "../data/beijing_2017_daily_for_bad_days.csv",
	target: "bad-number-2017",
	sparkTarget: "bad-days-2017",
	pieTarget: "pie-2017",
	monthsArray: "2017"
},
{
	csv: "../data/beijing_2018_berkeley.csv",
	target: "bad-number-2018",
	sparkTarget: "bad-days-2018",
	pieTarget: "pie-2018",
	monthsArray: "2018"
},
{
	csv: "../data/beijing_2019_berkeley.csv",
	target: "bad-number-2019",
	sparkTarget: "bad-days-2019",
	pieTarget: "pie-2019",
	monthsArray: "2019"
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


$( document ).ready(function() {
	// get current AQI and PM2.5 from stateair.
	initSliders();
	var url = 'http://stateair.net/web/rss/1/1.xml';
	//try loading rss with jQuery
	
	//feednami.setPublicApiKey('4275c345f113cdbd6aabbce7591be24577fe0ec93777769c6366d2bb0056daee');
	//feednami.load(url,function(result){
	//	if(result.error) {
	//
	//	} else {
	//		var entries = result.feed.entries;
	//		var aqiArr = [];
	//		var pm25Arr = [];
	//		var timeArr = [];
	//		for(var i = 0; i < entries.length; i++){
	//			var entry = entries[i];
	//			pm25Arr.push(entry['rss:conc']['#']);
	//			aqiArr.push(entry['rss:aqi']['#']);
	//			timeArr.push(entry.title);
	//		}
	//		var curAQI = aqiArr[aqiArr.length-1];
	//		var curPM = pm25Arr[pm25Arr.length-1];
	//		var colors = [
	//			"#242038",
	//			"#880D1E",
	//			"#D1324C",
	//			"#E8A945",
	//			"#F7DB76",
	//			"#BFF5DB"
	//		];
	//		var color;
	//		var color2;
	//		if (curAQI < 50) {
	//			color = colors[5];
	//		} else if (curAQI >= 50 && curAQI < 100) {
	//			
	//			color = colors[4];
	//		} else if (curAQI >= 100 && curAQI < 150) {
	//			color = colors[3];
	//		} else if (curAQI >= 150 && curAQI < 200) {
	//			color = colors[2];
	//		} else if (curAQI >= 200 && curAQI < 300) {
	//			color = colors[1];
	//		} else if (curAQI > 300) {
	//			color = colors[0];
	//		}
	//		
	//		if (curPM < 50) {
	//			color2 = colors[5];
	//		} else if (curPM >= 50 && curPM < 100) {
	//			
	//			color2 = colors[4];
	//		} else if (curPM >= 100 && curPM < 150) {
	//			color2 = colors[3];
	//		} else if (curPM >= 150 && curPM < 200) {
	//			color2 = colors[2];
	//		} else if (curPM >= 200 && curPM < 300) {
	//			color2 = colors[1];
	//		} else if (curPM > 300) {
	//			color2 = colors[0];
	//		}
	//		
	//		var date = new Date(timeArr[timeArr.length-1]);
	//		var hrs = date.getHours();
	//		var mins = date.getMinutes();
	//		var currentTime = hrs + ":" + mins + "0";
	//		
	//		$("#current-aqi").html(aqiArr[aqiArr.length-1]);
	//		$("#current-pm25").html(pm25Arr[pm25Arr.length-1]);
	//		$("#current-time").html(currentTime);
	//		$(".circle").css("background", color);
	//		
	//		//$("#current-pm25").css("background", color);
	//		$(".circle").fadeIn("200", function(){
	//			
	//		});
	//		//$(".paragraph h3").addClass("has-padding");
	//	}
	//});
	
	$("#legend").click(function(){
		$("#legend").toggleClass("popped");
	});

	var radialCharts = document.getElementById('radial-charts');

	
	function decideWhereToJump(yr) {
		// compare curren year with id of closest timeline element
		var draw_string = "data/" + yr + "_monthly_inverted_relative.csv";
		draw(draw_string, "#one", "");
	}
	
	var isInViewport = function (el) {
		const rect = el.getBoundingClientRect();
		// DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
		const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
		const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
	
		// http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
		const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
		const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
	
		return (vertInView && horInView);
	};
});




/* SLIDER STUFF */

function initSliders(){
	//createBarChart("bar-bkg");
	csvs.forEach(function(e, index){
		aqi = AQI_threshold;
		hours = bad_hours_threshold;
		updateTheScore(aqi, hours, e.csv, e.target, e.sparkTarget, e.pieTarget, e.monthsArray);
		calculateMinMeanMax(e.csv, mmmArray[index]);
		calculateAnnualMean(e.csv, e.monthsArray);
		calculateDaysWithMeanAbove(e.csv, e.monthsArray, 25);
	});
	_initial = false;
	//loadData();
	// set initial positions
	//createPieCharts(pieArray);

	//updateSliders(150, 9, 17);
	
	function setPositions(aqi, low, high) {
		var hours = high - low;
		document.getElementById("max-aqi").style.marginTop = -Math.round((aqi/600) * 100) + 'px';
		updatePollution();
	}
	function updateSliders() {

	}

}
function calculateAnnualMean(csv, year) {
	d3.csv(csv).then(function(data) {
		
		data.forEach(function(d) {
			d.date = parseDay(d.date);
			d.year = +d.year;
			d.month = +d.month;
			d.day = +d.day;
			d.hour = +d.hour;
			d.value = +d.value;
		});
		
		mmm = d3.nest()
			.key(function(d) {
				return d.year;
			})
			.rollup(function(v) {
				return [
						d3.mean(v, function(d) { if(d.value > -1) {return d.value;} else return; })
						];
			})
			.entries(data);
			
		mmm.forEach(function(item) {
			annualMeans.push(item.value);
			var target = "annual-mean-" + year;
			var target2 = "#annual-mean-intro-" + year;
			document.getElementById(target).innerHTML = Math.round(item.value);
			drawAnnualMeans(Math.round(item.value), target2);
		});
	});
}

function calculateDaysWithMeanAbove(csv, year, value) {
	d3.csv(csv).then(function(data) {
		//d3data = data;
		
		data.forEach(function(d) {
			d.date = parseDay(d.date);
			d.year = +d.year;
			d.month = +d.month;
			d.day = +d.day;
			d.hour = +d.hour;
			d.value = +d.value;
		});
		
		var dailyMeans = [];
		var daysWithMeanAbove = 0;
		dailyMeans = d3.nest()
			.key(function(d) {
				return d.date;
			})
			.rollup(function(v) {
				return [
						d3.mean(v, function(d) {
							if(d.value > -1) {
								return d.value;
								} else return;
							})
						];
			})
			.entries(data);
			
		dailyMeans.forEach(function(item) {
			//annualMeans.push(item.value);
			if (item.value > value) {
				daysWithMeanAbove++;
			}
		});
		var target = "radial-bad-number-" + year;
		var target2 = "#bad-number-bar-" + year;
		var target3 = "bad-number-bar-" + year + "-year";

		document.getElementById(target).innerHTML = Math.round((daysWithMeanAbove/365)*100) + "%";
		document.getElementById(target3).innerHTML = daysWithMeanAbove;
		
		//drawIntroAnnualDaysAbove25Bar(daysWithMeanAbove, target2);
		drawDonuts(daysWithMeanAbove, target2);
	});
}

function drawIntroAnnualDaysAbove25Bar(days, target) {
	var opac = days/365;
	var opacString = "rgba(170, 170, 170, " + opac + ")";
	
	var yeartarget = target + "-year";
	//document.getElementById(yeartarget).innerHTML = days;
	$(yeartarget).html(days);
	var pcnt = days/365 * 200;

	$( target ).animate({
		height: pcnt + "px",//bad_days * 1.5 + "px",
	}, 300 );
	$(target).css({
		"background-color": opacString
	});
}

function drawAnnualMeans(pm25, target) {
	var bgColor = "rgba(8, 64, 129, " + pm25/100 + ")";
	var txttarget = target.substr(1) + "-txt";
	
	document.getElementById(txttarget).innerHTML = pm25;
	TweenMax.to(target, 0.3, {backgroundColor: bgColor, height: pm25 + "px"});
}
function calculateMinMeanMax(csv, target) {
	//currently calculating daily values which makes the chart very jagged
	d3.csv(csv).then(function(data) {
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
				return d.month;
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
		
		var minMeanMax = [];
		
		mmm.forEach(function(item) {
			minMeanMax.push(item.value);
		});
		//MinMeanMax(minMeanMax, target);
		
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
	})
}
function updateTheScore(aqi, hours, csv, target, sparkTarget, pieTarget, monthsArray) {
	
	d3.csv(csv).then(function(data) {
		
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
		badHoursPerDay.forEach(function(item, index){
		
			if(item.value.bad_hours > hours) {
				// this is a bad day
				bad_days++;
			}
		});

		//document.getElementById(target).innerHTML = bad_days;
		// Set bad days for radial charts once only
		// TODO need to check for each year separately, has it been set
		// Or always update but use the same settings
		if (_bad_days_initial == true) {
			//_bad_days_initial = false;
			document.getElementById("radial-" + target).innerHTML = bad_days;
		}
		
		// set bar to height of 3*bad days
		var tgt = "#" + sparkTarget + "-bar";
		//document.getElementById(tgt).style.height = bad_days * 2.5 + "px";
		//$(tgt).fadeOut();
		var pcnt = bad_days/365 * 300;
		$( tgt ).animate({
			height: pcnt + "px",//bad_days * 1.5 + "px",    
		}, 300 );
		
		badDaysPerYear.push(bad_days);

		//let's see how many bad days each month
		var badHoursPerMonth = [];
		//var bad_dayss = 0;
		
		badHoursPerMonth = d3.nest()
			//.key(function(d) { return d.year; })
			.key(function(d) { return d.month; })
			.key(function(d) { return d.day; })
			.rollup(function(v) { return {    
				//count: v.length,
				bad_hours: v.filter(function(d){
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
			});
			
			var bdm = {};
			bdm.month = index + 1;
			//if(bad_days_month <= 0){
			//	bad_days_month = 0;
			//}
			bdm.bad_days = bad_days_month;
			
			//need to percentify for sparklines
			badDaysPerMonth.push(bdm.bad_days);
			
			var max = Math.max.apply(Math, badDaysPerMonth); // picks out 5000
			percents = badDaysPerMonth.map(n => Math.round(n/max * 100));
			
			var bartgt = "bars-" + monthsArray;
			
			//document.getElementById(sparkTarget).innerHTML = "{" + badDaysPerMonth + "}";
			document.getElementById(bartgt).innerHTML = "{" + badDaysPerMonth + "}";
		});
		
		switch(monthsArray) {
			case "2009":
				_2009 = badDaysPerMonth;
				break;
			case "2010":
				_2010 = badDaysPerMonth;
				break;
			case "2011":
				_2011 = badDaysPerMonth;
				break;
			case "2012":
				_2012 = badDaysPerMonth;
				break;
			case "2013":
				_2013 = badDaysPerMonth;
				break;
			case "2014":
				_2014 = badDaysPerMonth;
				break;
			case "2015":
				_2015 = badDaysPerMonth;
				break;
			case "2016":
				_2016 = badDaysPerMonth;
				break;
			case "2017":
				_2017 = badDaysPerMonth;
				break;
			case "2018":
				_2018 = badDaysPerMonth;
				break;
			case "2019":
				_2019 = badDaysPerMonth;
				break;
		}
		
		// what's the cumulative total PM2.5 concentration
	});
}
function onParseComplete() {
	showDifferenceBetweenYears(months[2].bad_days, months[months.length-1].bad_days);
}