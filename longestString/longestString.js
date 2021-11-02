var $ = function (id) {
	return document.getElementById(id);
};
for (; usrInput != "***";) {
	var longestString = 0;
	var usrInput = "";
	var alphaLower = "abcdefghijklmnopqrstuvwxyz"
	var getStrings = function () {
		for (; ;) {
			var uniqueCount = 0;
			usrInput = prompt("Enter a String to count the unique letters of here or enter '***' to end");
			if (usrInput == "***") {
				break
			}//if
			usrInput = usrInput.replace(/\s/g, '').toLowerCase();
			for (var i = 0; i < alphaLower.length; i++) {
				if (usrInput.includes(alphaLower.charAt(i))) {
					uniqueCount++;
				}
				//alert(alphaLower.charAt(i));
			}//for
			//alert(usrInput);
			//alert(uniqueCount);

			if (uniqueCount > longestString) {
				longestString = uniqueCount;
			}// if


			//alert(usrInput.length);
		}//for
		alert(longestString);
	}//getStrings function
	getStrings()
}//for