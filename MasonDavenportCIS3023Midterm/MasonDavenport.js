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
			alert("Thanks for using the ie checker");
			break//quit program
		}

		modifiedString = usrInput;
		//var re = new RegExp(alphaUpper.charAt(i), 'g');
		
		//the line below is to comment out the pretty code
		/*
		for (var i = 0; i < alphaUpper.length; i++) {//index through the alphabet
			modifiedString = modifiedString.replace(alphaUpper.charAt(i), "_" + alphaUpper.charAt(i));
		}//for
		//*/

		//the line below is to comment out that dirty code
		//*

		//I hate that I had to do it like this....
		modifiedString = modifiedString.replace(/A/g, "_A");
		modifiedString = modifiedString.replace(/B/g, "_B");
		modifiedString = modifiedString.replace(/C/g, "_C");
		modifiedString = modifiedString.replace(/D/g, "_D");
		modifiedString = modifiedString.replace(/E/g, "_E");
		modifiedString = modifiedString.replace(/F/g, "_F");
		modifiedString = modifiedString.replace(/G/g, "_G");
		modifiedString = modifiedString.replace(/H/g, "_H");
		modifiedString = modifiedString.replace(/I/g, "_I");
		modifiedString = modifiedString.replace(/J/g, "_J");
		modifiedString = modifiedString.replace(/K/g, "_K");
		modifiedString = modifiedString.replace(/L/g, "_L");
		modifiedString = modifiedString.replace(/M/g, "_M");
		modifiedString = modifiedString.replace(/N/g, "_N");
		modifiedString = modifiedString.replace(/O/g, "_O");
		modifiedString = modifiedString.replace(/P/g, "_P");
		modifiedString = modifiedString.replace(/Q/g, "_Q");
		modifiedString = modifiedString.replace(/R/g, "_R");
		modifiedString = modifiedString.replace(/S/g, "_S");
		modifiedString = modifiedString.replace(/T/g, "_T");
		modifiedString = modifiedString.replace(/U/g, "_U");
		modifiedString = modifiedString.replace(/V/g, "_V");
		modifiedString = modifiedString.replace(/W/g, "_W");
		modifiedString = modifiedString.replace(/X/g, "_X");
		modifiedString = modifiedString.replace(/Y/g, "_Y");
		modifiedString = modifiedString.replace(/Z/g, "_Z");
		//*/

		alert(modifiedString);


	}//for
}//insert underscore function
function buttonFunction() {
	insertUnderscore();
}//button function function
/*
function name(str, replaceWhat, replaceTo) {
	var re = new RegExp(replaceWhat, 'g');
	return str.replace(re, replaceTo);
}
*/
