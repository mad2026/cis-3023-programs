var $ = function (id) {
	return document.getElementById(id);
};
var main = function () {
	/*
	var usrArray = [];
	usrArray[0] = 141.95;
	usrArray[1] = 212.25;
	usrArray[2] = 411;
	usrArray[3] = 135.75;
	//*/
	//alert(arrayAverage(randomArrayGenerator()));
	(runMultiple());
}//main function

var runMultiple = function () {
	var numTrials = parseInt(prompt("Enter number of trials"));
	var arraySizeSum = 0;
	//var arrayAverageAverage = 0;
	var arrayStats = new Array(2);
	var sumOfAverages = 0;
	for (var j = 0; j < numTrials; j++) {//index through the array
		arrayStats = (arrayAverage(randomArrayGenerator()));
		arraySizeSum += arrayStats[0]
		sumOfAverages += arrayStats[1]
	}
	arrayStats[0] = arraySizeSum/numTrials;
	arrayStats[1] = sumOfAverages/numTrials;
	//arrayAverageAverage = sumOfAverages/numTrials;
	alert (arraySizeSum/numTrials);
	alert (sumOfAverages/numTrials);
}
var arrayAverage = function (usrArray) {
	if (usrArray[1].length == 0) {//checks to make sure the size of the array is not zero
		return (false);
	}//if
	var sumOfArray = 0;
	var arrayStats = new Array(2);

	if (Array.isArray(usrArray[1])) {
		for (var i = 0; i < usrArray[1].length; i++) {//index through the array
			if (isNaN(parseFloat(usrArray[1][i]))) {//check to see if value is not a number, if so return false.
				return (false);
			}//if
			sumOfArray += usrArray[1][i];
		}//for
	}//if
	arrayStats[1] = (sumOfArray / usrArray[1].length).toFixed(2);
	arrayStats[0] = usrArray[0];
	return (arrayStats);//return the average of the array
}//arrayAverage function

var randomArrayGenerator = function () {
	var arraySize = Math.floor(Math.random() * 50) + 1;//create a random number for the array size between 1 and 50
	//alert(arraySize);
	var usrArray = new Array(arraySize);
	var arrayWithLength = new Array(2);

	for (var i = 0; i < usrArray.length; i++) {//index through the array
		usrArray[i] = Math.floor(Math.random() * 100) + 1;//procedurally create random numbers for each index of the array between 1 and 100
	}//for
	//alert(usrArray);
	arrayWithLength[0] = arraySize;
	arrayWithLength[1] = usrArray;
	return (arrayWithLength);
}//randomArrayGenerator function


main();