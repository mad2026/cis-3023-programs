var $ = function (id) {
	return document.getElementById(id);
};

var menu = function () {
	var menuOption = "";
	for (; ;) {
		menuOption = parseInt(prompt("Menu\n\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit"));
		if (!isNaN(menuOption) && menuOption > 0 && menuOption < 8) {
			break
		}
		else {
			alert("Please enter a number 1-7")
		}
	}
}
var addition = function () {
}
var subtraction = function () {
}
var multiplication = function () {
}
var division = function () {
}
var exponential = function () {
}
var average = function () {
}
var exitProgram = function () {
}

///*
switch (menuOption - 1) {
	case 0://Add
		addition();
		break;
	case 1://Subtract
		subtraction();
		break;
	case 2://Multiply
		multiplication();
		break;
	case 3://Divide
		division();
		break;
	case 4://Exponent
		exponential();
		break;
	case 5://Mean
		average();
		break;
	case 6://Quit
		exitProgram();
}
//*/
menu();

window.onload = function () {
	$("subtotal").value = "";
	$("tax_rate").value = "";
	$("shipping_charges").value = "";
	$("calculate").onclick = calculate;
	//$("monthly_payment").focus();
}

