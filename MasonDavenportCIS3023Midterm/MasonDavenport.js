var $ = function (id) {
	return document.getElementById(id);
};
function insertUnderscore() {
	for (; ;) {
		var modifiedString = "";
		var usrInput = "";
		var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var usrInput = prompt("Enter a String to insert underscores before ever uppercase letter or enter '***' to end");
		if (usrInput == "***") {
			break//quit program
		}
		modifiedString = usrInput;
		for (var i = 0; i < alphaUpper.length; i++) {//index through the alphabet
			modifiedString = modifiedString.replace(alphaUpper.charAt(i), "_" + alphaUpper.charAt(i));
		}//for
		return (modifiedString);
	}//for
}//insert underscore function
function buttonFunction() {
	alert(insertUnderscore());
}//button function function