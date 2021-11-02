var $ = function (id) {
	return document.getElementById(id);
};
for (; ;) {
	var longestString;
	var usrInput = "";
	var alphaLower = "abcdefghijklmnopqrstuvwxyz"
	var getStrings = function (usrInput) {
		var uniqueCount = 0;
		usrInput = usrInput.replace(/\s/g, '').toLowerCase();
		for (var i = 0; i < alphaLower.length; i++) {
			if (usrInput.includes(alphaLower.charAt(i))) {
				uniqueCount++;
			}
		}//for
		return (uniqueCount);
	}//getStrings function
	
	usrInput = prompt("Enter a String to count the unique letters of here or enter '***' to end");
	if (usrInput == "***") {
		break
	}//if
	if (isNaN(longestString)) {
		longestString = getStrings(usrInput);
	}//if
	if (getStrings(usrInput) > longestString) {
		longestString = getStrings(usrInput);
	}// if
}//for
alert(longestString);