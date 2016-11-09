// Create array to hold game cards
var cards = ['queen', 'queen', 'king', 'king'];

// Array for holding "flipped" cards for evaluation
var cardsInPlay = [];

// Retrieve HTML element game-board and set equal to variable gameBoard
var gameBoard = document.getElementById('game-board');

// Create cards / game board
function createCards() {
  // Iterate through cards array
  for (var i = 0; i < cards.length; i++) {
    // Each iteration creates a div element (card)
    var newCard = document.createElement('div');
    // Assign class to each new card for styling
    newCard.className = 'card';
    // Set attribute (face value) of card element
    newCard.setAttribute('face', cards[i]);
    // Execute isTwoCards when card element is clicked
    newCard.addEventListener('click', isTwoCards);
    // Add newly created card elements to game board
    gameBoard.appendChild(newCard);
    gameBoard.appendChild(newCard);
  }
}

// Checks board for presence of cards
function isTwoCards() {
  // Add clicked card to cardsInPlay array for evaluation via "this"
  cardsInPlay.push(this.getAttribute('face'));
  // Display the face of the card
  console.log(this.getAttribute('face'));
  // Display 'king' card face
  if (this.getAttribute('face') === 'king') {
    this.innerHTML = "<img src='images/king.png'>";
  }
  // Display 'queen' card face
  else {
    this.innerHTML = "<img src='images/queen.png'>";
  }
  // Evaluate cardsInPlay array for a match
  if (cardsInPlay.length === 2) {
    // Pass cardsInPlay array to matchTwo function
    matchTwo(cardsInPlay);
    // Clear cardsInPlay array for subsequent round
    cardsInPlay = [];
  }
}
// Check for matching face attributrs of two card elements
function matchTwo(cards) {
  // Prompt player if two cards are matched
  if (cards[0] === cards[1]) {
    setTimeout(function() {
      alert("You found a match!");
      }, 1000);
  }
  else {
    setTimeout(function() {
      alert("Sorry, try again.");
      }, 1000);
  }
}
createCards();
