var $ = function (id) {
	return document.getElementById(id);
};
var main = function () {
	var longestString = "";
	var usrInput = "";
	for (; ;) {
		var usrInput = prompt("Enter a String to count the unique letters of here or enter '***' to end");
		if (usrInput == "***") {
			break//quit program
		}//if
		if (getStrings(usrInput) > getStrings(longestString)) {//only save the highest number of unique lowercase letters
			longestString = usrInput;
		}//if
	}//for
	return(longestString);
}
var getStrings = function (usrInput) {
	var alphaLower = "abcdefghijklmnopqrstuvwxyz"
	var uniqueCount = 0;
	usrInput = usrInput.replace(/\s/g, '').toLowerCase();//remove whitespace and change to lowercase
	for (var i = 0; i < alphaLower.length; i++) {//index through the alphabet
		if (usrInput.includes(alphaLower.charAt(i))) {//check if the user input contains a letter, if so add to the count
			uniqueCount++;
		}//if
	}//for
	return (uniqueCount);
}//getStrings function

alert("the string with the most characters was: " + main());