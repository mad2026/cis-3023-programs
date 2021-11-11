var $ = function (id) {
	return document.getElementById(id);
};
var main = function () {
	var usrArray = [];
	usrArray[0] = 141.95;
	usrArray[1] = 212.25;
	usrArray[2] = 411;
	usrArray[3] = 135.75;
	/*for (; ;) {
		var usrInput = prompt("Enter a String to count the unique letters of here or enter '***' to end");//get user input
		if (usrInput == "***") {
			break//quit program
		}//if
	}//for*/
	arrayAverage(usrArray);
	//alert("the string with the most characters was: \"" + longestString + "\". With a unique count of \"" + getStrings(longestString) + "\".");
}//main function
var arrayAverage = function (usrArray) {
	var sum = 0;
	if(Array.isArray(usrArray)){
		for (var i = 0; i < usrArray.length; i++) {//index through the array
			if(isNaN(parseFloat(usrArray[i]))){
				return(false);
			}//if
			sum +=usrArray[i]
		}//for
	}//if
	alert (sum/usrArray.length);
}//arrayAverage function


main();