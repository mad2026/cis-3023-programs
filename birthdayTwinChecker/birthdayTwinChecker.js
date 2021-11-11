var $ = function (id) {
	return document.getElementById(id);
};
var main = function () {
	alert(arrayMatcher(randomArrayGenerator()));
}//main function
var arrayMatcher = function (usrArray) {
	var map = {};
	var matchFound = false;
	for (var i = 0; i < usrArray.length; i++) {//index through the array
		if (map[usrArray[i]]) {
			matchFound = true;
			break;
		}//if
		map[usrArray[i]] = true;
	}//for
	return (matchFound);
}//arrayAverage function

var randomArrayGenerator = function () {
	var arraySize = 25;
	alert(arraySize);
	var usrArray = new Array(arraySize);
	for (var i = 0; i < usrArray.length; i++) {//index through the array
		usrArray[i] = Math.floor(Math.random() * 365) + 1;
	}//for
	alert(usrArray);
	return (usrArray);
}//randomArrayGenerator function


main();