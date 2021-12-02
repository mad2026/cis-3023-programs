var $ = function (id) {
	return document.getElementById(id);
};
var main = function () {
	
}//main function

var getArticle = function () {
	var articlesString = $("articles").value;
	var articles = articlesString.split(" ");
	var randomIndex = Math.floor(Math.random() * articles.length);
	//alert(articles[randomIndex]);
	return articles[randomIndex];
}//getArticle function

var getPreposition = function () {
	var prepositionsString = $("prepositions").value;
	var prepositions = prepositionsString.split(" ");
	var randomIndex = Math.floor(Math.random() * prepositions.length);
	//alert(prepositions[randomIndex]);
	return prepositions[randomIndex];
}//getPreposition function

var getNoun = function () {
	var nounsString = $("nouns").value;
	var nouns = nounsString.split(" ");
	var randomIndex = Math.floor(Math.random() * nouns.length);
	//alert(nouns[randomIndex]);
	return nouns[randomIndex];
}//getNoun function

var getVerb = function () {
	var verbsString = $("verbs").value;
	var verbs = verbsString.split(" ");
	var randomIndex = Math.floor(Math.random() * verbs.length);
	//alert(verbs[randomIndex]);
	return verbs[randomIndex];
}//getVerb function

var getAdjective = function () {
	var adjectivesString = $("adjectives").value;
	var adjectives = adjectivesString.split(" ");
	var randomIndex = Math.floor(Math.random() * adjectives.length);
	//alert(adjectives[randomIndex]);
	return adjectives[randomIndex];
}//getAdjective function

var getSentence = function () {
	
	return (getArticle() + " " + getAdjective() + " " + getNoun() + " " + getArticle() + " " + getArticle() + " " + getArticle() + " " + getArticle());
}//getAdjective function

main();