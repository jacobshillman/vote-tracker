function Card(suit, face, value) {
	this.suit = suit;
	this.face = face;
	this.value = value;
}

var Deck = function() {
	this.deck = new Array();
	var suits = new Array("Hearts", "Diamonds", "Spades", "Clubs");
	var faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
	var values = new Array(2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11);

	this.buildDeck = function() {
		this.deck = new Array(52);
		var deckIndex = 0;
		for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
			for (var faceIndex = 0; faceIndex < faces.length; faceIndex++) {
				this.deck[deckIndex] = new Card(suits[suitIndex], faces[faceIndex], values[faceIndex]);
				console.log("Adding the " + this.deck[deckIndex].face + " of " + this.deck[deckIndex].suit);
				deckIndex++;
			}
		}
	}

	this.dealCard = function() {
		var cardIndex = Math.floor(Math.random() * this.deck.length);
		var card = this.deck[cardIndex];
		this.deck.splice(cardIndex, 1);
		return card;
	}
}

var Player = function() {
	this.hand = new Array();
	this.hand[0] = deckOfCards.dealCard();
	this.hand[1] = deckOfCards.dealCard();
}

var deckOfCards = new Deck();
deckOfCards.buildDeck();

var testPlayer = new Player();
console.log(testPlayer);

  var players = new Array();


function addPlayer() {
	var name = prompt("What's your name, dude?");
	var $playerDiv = $("<div class='player' id='player-" + players.length + "'></div>");
	$playerDiv.append("<h1>" + name + "</h1>");
	$playerDiv.append("<div class='player-cards'></div>");
	$("#playerBucket").append($playerDiv);
	players.push(new Player());
}

function showCards () {
	for (var index = 1; index < players.length; index++) {
		var player = players[index];
		$cardBucket = $("#player-"+index+" .player-cards");
		for (var cardIndex=0; cardIndex<player.hand.length; cardIndex++) {
		var card = player.hand[cardIndex];
		$cardBucket.append("<div>" +card.face +" of "+ card.suit + "</div");
		}
	}
};

$(document).ready(function() {
	players.push(new Player());
	$("#add_player").on("click", function() {
		addPlayer();
	});

});
