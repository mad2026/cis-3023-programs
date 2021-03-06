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
		if (atLeast6SumOn2Dice()) {
			numSuccesses++;
		}//if
	}//for
	var probabilityAverage = numSuccesses / numTrials;
	alert("Probability of getting at Least 6 Sum On 2 Dice is: \n" + probabilityAverage.toFixed(4) + "\n after " + numTrials + " trial(s).")
}//main function

var atLeast6SumOn2Dice = function () {
	var die1 = randomNumGenerator();
	var die2 = randomNumGenerator();
	return ((die1 + die2) >= 6);
}//getAtLeast5Heads10Tosses function

var coinIsHead = function (randNum) {
	if (randNum == 1) {//checks if the value of randNum is 1, aka heads
		return (true);
	}//if
	return (false);
}//coinIsHead function

var randomNumGenerator = function () {
	var randNum = Math.floor(Math.random() * 6) + 1;//create a random number between 1 and 6
	//alert(randNum);
	return (randNum);
}//randomNumGenerator function


main();