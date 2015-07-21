
/**
 * Simple function that loads the countdown() for the canvas.
 */
function load(){ 
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.font = "bold 20px Arial";
	
    context.clearRect(0,0,canvas.width, canvas.height);
	context.fillText(countDown(2015, 9, 19, 12), 0, 25);	
}

/**
* Count down clock
* @param year - the year YYYY
* @param mounth - the month (the int not name)
* @param day - the day 
* @param hour - the hour (24 hour time)
*/
function countDown(year, month, day, hour){
	
	// get todays date in milliseconds
	var today = new Date().getTime();
	
	// get "later" date in milliseconds 
	var later = new Date(year, (month - 1), day, hour, 0).getTime();

	// so we need to convert milliseconds to something that will be readable
	var sec = Number(((later - today) / 1000)).toFixed(0); // 1000 milliseconds in second
	var min = Number(sec / 60).toFixed(0); // 60 seconds in min
	var hour = Number(min / 60).toFixed(0); // 60 minutes in hour
	var days = Number(hour / 24).toFixed(1); // 24 hours in day
	
	// mod them so we only see < the day, or < hour, or < min
	// TODO: consider doing it in one step above, that could remove from readability.
	sec %= 60;
	min %= 60;
	hour %= 24;
	
	// hack band-aid ...
	// so for some reason we are off by 30 seconds
	// IE: once 29 seconds hits the minutes decrease
	// so we do this ugly fucking thing until we figure out why...
	//TODO: at zero it flips to 60 I think ... ? so need a better
	//      band-aid
	if (sec < 30){
		    min +=1;
	}
	
	// FINALLY return the damn result, as a string.
	return Number(days).toFixed(0) + " days, " +
	       Number(hour).toFixed(0) + " hours, " +
	       Number(min).toFixed(0) + " minutes, " +
	       Number(sec).toFixed(0) + " seconds";
	
}
