console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
cardsInPlay.push("cards[cardId]");


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
  } else { 
  	console.log("Sorry, try again."); }
}


var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId]);
checkForMatch();
if (cardsInPlay.length === 2) {
  }
}

flipCard(0);

flipCard(2);

