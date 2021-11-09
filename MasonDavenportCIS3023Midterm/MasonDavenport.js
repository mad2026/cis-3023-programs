var $ = function (id) {
	return document.getElementById(id);
};
function main() {
	var usrInput = "";
	var usrInput = prompt("Enter a String to insert underscores before ever uppercase letter or enter '***' to end");
	if (usrInput == "***") {
		alert("Thanks for using the ie checker");
		return//quit program
	}// if
	alert(insertUnderscore(usrInput));
}//main function

function insertUnderscore(usrInput) {
	var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var modifiedString = usrInput;
	for (var i = 0; i < alphaUpper.length; i++) {//index through the alphabet
		modifiedString = modifiedString.replace(new RegExp(alphaUpper.charAt(i), "g"), "_" + alphaUpper.charAt(i));
	}//for
	return (modifiedString);
}//insert underscore function

function buttonFunction() {
	main();
}//button function function
