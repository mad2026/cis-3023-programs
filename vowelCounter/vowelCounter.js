var $ = function (id) {
	return document.getElementById(id);
};
//variables go here
var usrInput = "";
var num1;
var num2;
var meanCount = 0;
var breakValue = "";
for (; breakValue != "EXIT";) {

	vowelCount = 0;
	usrInput = prompt("Please enter a string here to count the total vowels or enter '***' to end");
	for (var i = 0; i < usrInput.length; i++) {
		if (usrInput.charAt(i).toLowerCase() == "a" || usrInput.charAt(i).toLowerCase() == "e" || usrInput.charAt(i).toLowerCase() == "i" || usrInput.charAt(i).toLowerCase() == "o" || usrInput.charAt(i).toLowerCase() == "u") {
			vowelCount++;
		}
		else if (usrInput == "***") {
			exitProgram();
			break
		}
		else {
		}
	}//for
	alert(vowelCount);

	var exitProgram = function () {
		alert("Thank you for using Vowel Counter, have a nice day!");
		breakValue = "EXIT";
	}//exit function
}//for
window.onload = function () {
	//$("subtotal").value = "";
	//$("tax_rate").value = "";
	//$("shipping_charges").value = "";
	//$("calculate").onclick = calculate;
	//$("monthly_payment").focus();
}

