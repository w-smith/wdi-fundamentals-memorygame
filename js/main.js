console.log("Up and running!");

var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'image/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];
cardsInPlay.push("cards[cardId].rank");



var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
  } else { 
  	alert("Sorry, try again."); }
}


var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId].rank);
checkForMatch();
if (cardsInPlay.length === 2) {
  }
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

}

flipCard(0)
flipCard(2)



