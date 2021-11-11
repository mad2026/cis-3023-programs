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
	alert(arrayAverage(randomArrayGenerator()));
}//main function
var arrayAverage = function (usrArray) {
	var sum = 0;
	if (Array.isArray(usrArray)) {
		for (var i = 0; i < usrArray.length; i++) {//index through the array
			if (isNaN(parseFloat(usrArray[i]))) {
				return (false);
			}//if
			sum += usrArray[i];
		}//for
	}//if
	return (sum / usrArray.length);
}//arrayAverage function

var randomArrayGenerator = function () {
var arraySize = Math.floor(Math.random() * 50) + 1;
var usrArray = new Array(arraySize);
for (var i = 0; i < usrArray.length; i++) {//index through the array
	usrArray[i] = Math.floor(Math.random() * 100) + 1;
}//for
return(usrArray);
}//randomArrayGenerator function


main();