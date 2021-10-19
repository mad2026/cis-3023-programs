var $ = function (id) {
	return document.getElementById(id);
};
//variables go here
var menuOption = "";
var num1;
var num2;
var meanCount;
for (; ;) {
	var menu = function () {
		for (; ;) {
			menuOption = parseInt(prompt("Menu\n\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit"));
			if (!isNaN(menuOption) && menuOption > 0 && menuOption < 8) {
				break
			}
			alert("Please enter a number 1-7");
		}
	}
	var addition = function () {
		for (; ;) {
			num1 = parseFloat(prompt("Enter the first number here"));
			if (!isNaN(num1)) {
				break
			}
			alert("Please enter a number");
		}
		for (; ;) {
			num2 = parseFloat(prompt("Enter the second number here"));
			if (!isNaN(num2)) {
				break
			}
			alert("Please enter a number");
		}
		alert(num1 + num2);
	}
	var subtraction = function () {
		for (; ;) {
			num1 = parseFloat(prompt("Enter the first number here"));
			if (!isNaN(num1)) {
				break
			}
			alert("Please enter a number");
		}
		for (; ;) {
			num2 = parseFloat(prompt("Enter the second number here that will be subtracted from the first"));
			if (!isNaN(num2)) {
				break
			}
			alert("Please enter a number");
		}
		alert(num1 - num2);
	}
	var multiplication = function () {
		for (; ;) {
			num1 = parseFloat(prompt("Enter the first number here"));
			if (!isNaN(num1)) {
				break
			}
			alert("Please enter a number");
		}
		for (; ;) {
			num2 = parseFloat(prompt("Enter the second number here that will be multiplied with the first"));
			if (!isNaN(num2)) {
				break
			}
			alert("Please enter a number");
		}
		alert(num1 * num2);
	}
	var division = function () {
		for (; ;) {
			num1 = parseFloat(prompt("Enter the first number / numerator here"));
			if (!isNaN(num1)) {
				break
			}
			alert("Please enter a number");
		}
		for (; ;) {
			num2 = parseFloat(prompt("Enter the second number/ denominator here that the first number will be divided by"));
			if (!isNaN(num2)) {
				break
			}
			alert("Please enter a number");
		}
		alert(num1 / num2);
	}
	var exponential = function () {
		for (; ;) {
			num1 = parseFloat(prompt("Enter the base number here"));
			if (!isNaN(num1)) {
				break
			}
			alert("Please enter a number");
		}
		for (; ;) {
			num2 = parseFloat(prompt("Enter the exponent here"));
			if (!isNaN(num2)) {
				break
			}
			alert("Please enter a number");
		}
		alert(num1 ** num2);
	}
	var average = function () {
		for (; ;) {
			num1 = prompt("Enter a number to add to the average here or enter '***' to end");
			if (!isNaN(parseFloat(num1))) {
				num2 += parseFloat(num1);
				meanCount++;
			}
			else if (num1 == "***") {
				break
			}
			else {
				alert("Please enter a number");
			}
		}
		alert(parseFloat(num2) / meanCount);
	}
	var exitProgram = function () {
	}


	///*
	//*/
	menu();
	//alert(menuOption - 1);
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
}
window.onload = function () {
	//$("subtotal").value = "";
	//$("tax_rate").value = "";
	//$("shipping_charges").value = "";
	//$("calculate").onclick = calculate;
	//$("monthly_payment").focus();
}

