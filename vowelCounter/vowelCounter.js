var $ = function (id) {
	return document.getElementById(id);
};
for (; ;) {
	vowelCount = 0;
	var usrInput = prompt("Please enter a string here to count the total vowels or enter '***' to end");
	if (usrInput == "***") {
		alert("Thank you for using Vowel Counter, have a nice day!");
		break
	}//if
	for (var i = 0; i < usrInput.length; i++) {
		if (usrInput.charAt(i).toLowerCase() == "a" || usrInput.charAt(i).toLowerCase() == "e" || usrInput.charAt(i).toLowerCase() == "i" || usrInput.charAt(i).toLowerCase() == "o" || usrInput.charAt(i).toLowerCase() == "u") {
			vowelCount++;
		}
	}//for
	alert(vowelCount);
}//for

