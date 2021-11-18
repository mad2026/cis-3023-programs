var $ = function (id) {
	return document.getElementById(id);
};
var main = function () {
	//head = 1
	//tail = 2
	var numSuccesses = 0;
	var numTrials = parseInt(prompt("Enter the number of trials to run here"));
	for (var i = 0; i < numTrials; i++) {//run the test the number of times the user requests
		//if (coinIsHead(randomNumGenerator())) {
		if (getAtLeast5Heads10Tosses()) {
			numSuccesses++;
		}//if
	}//for
	var probabilityAverage = numSuccesses / numTrials;
	alert("Probability of getting a head on a coin toss is: \n" + probabilityAverage.toFixed(4) + "\n after " + numTrials + " trial(s).")
}//main function

var getAtLeast5Heads10Tosses = function () {
	var numSuccesses = 0;
	for (var i = 0; i < 10; i++) {//run the test the number of times the user requests
		if (coinIsHead(randomNumGenerator())) {
			numSuccesses++;
		}//if
	}//for
	return(numSuccesses >= 5);
}//getAtLeast5Heads10Tosses function

var coinIsHead = function (randNum) {
	if (randNum == 1) {//checks if the value of randNum is 1, aka heads
		return (true);
	}//if
	return (false);
}//coinIsHead function

var randomNumGenerator = function () {
	var randNum = Math.floor(Math.random() * 2) + 1;//create a number 1 or 2
	//alert(randNum);
	return (randNum);
}//randomNumGenerator function


main();