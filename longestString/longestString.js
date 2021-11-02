var $ = function (id) {
	return document.getElementById(id);
};
for (; ;) {
	var longestString;
	var usrInput = "";
	var alphaLower = "abcdefghijklmnopqrstuvwxyz"
	var usrInput = prompt("Enter a String to count the unique letters of here or enter '***' to end");
	if (usrInput == "***") {
		break//quit program
	}//if
	if (isNaN(longestString)) {//assign blank variable to a number value
		longestString = getStrings(usrInput);
	}//if
	if (getStrings(usrInput) > longestString) {//only save the highest number of unique lowercase letters
		longestString = getStrings(usrInput);
	}//if
	
	var getStrings = function (usrInput) {
		var uniqueCount = 0;
		usrInput = usrInput.replace(/\s/g, '').toLowerCase();//remove whitespace and change to lowercase
		for (var i = 0; i < alphaLower.length; i++) {//index through the alphabet
			if (usrInput.includes(alphaLower.charAt(i))) {//check if the user input contains a letter, if so add to the count
				uniqueCount++;
			}//if
		}//for
		return (uniqueCount);
	}//getStrings function

}//for
alert(longestString);