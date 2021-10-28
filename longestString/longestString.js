var $ = function (id) {
	return document.getElementById(id);
};
for (; usrInput != "***";) {
	var breakValue = "";
	var usrInput = "";
	var getStrings = function () {
		var stringArray = [];
		for (; ;) {
			//alert(num2)
			usrInput = prompt("Enter a String to count the unique letters of here or enter '***' to end");
			if (usrInput == "***") {
				break
			}
			stringArray[stringArray.length] = usrInput;
		}//for
		alert(stringArray);
	}//getStrings function

	var countAlpha = function(stringArray){
		
	}
	getStrings()
}//for