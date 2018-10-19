//
// Blackjack
// by Mark Zamoyta
//
//

// card variables
let suits = ["Karo", "Herz", "Kreuz", "Pik"];
let values = ["As", "Koenig", "Dame", "Bube", "Zehn", "Neun", "Acht", "Sieben", "Sechs", "Fuenf", "Vier", "Drei", "Zwei"];

// DOM variables
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];


hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addEventListener("click", function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    // create cards in deck
    deck =  createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(deck), getNextCard(deck)];
    playerCards = [getNextCard(deck), getNextCard(deck)];

    // dom changes
    textArea.innerText = "Spiel gestartet...";
    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
});

hitButton.addEventListener("click", function() {
    playerCards.push(getNextCard(deck));
    checkForEndOfGame();
    showStatus();
}) ;

stayButton.addEventListener("click", function(){
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});

function createDeck() {
    let deck = [];
    // create values in deck array
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for(let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx],
            };
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for(let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getNextCard(deck) {
    return deck.shift();
}

function getCardString(card) {
    return card.value + " " + card.suit;
}

function showStatus() {
    if(!gameStarted) {
        textArea.innerText = "Willkommen bei Blackjack!";
    }

    let dealerCardString = "";
    for(let i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + "\n";
    }

    let playerCardString = "";
    for(let i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + "\n";
    }

    updateScore();

    textArea.innerText = "Der Dealer hat:\n" + dealerCardString + "(Punkte: " + dealerScore + ")\n\n" +
        "Der Spieler hat:\n" + playerCardString + "(Punkte: " + playerScore + ")";

    if(gameOver) {
        if(playerWon) {
            textArea.innerText += "\n\nDu gewinnst!";
        } else {
            textArea.innerText += "\n\nDer Dealer gewinnt!";
        }
        newGameButton.style.display = "inline";
        hitButton.style.display = "none";
        stayButton.style.display = "none";
    }
}

function updateScore() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;

    for(let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if(card.value === "As") {
            hasAce = true;
        }
    }
    // ein As kann 1 oder 11 punkte wert sein, 1 wurde schon ueber getNumericValue zurueck gegeben
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    } else {
        return score;
    }
}

function getCardNumericValue(card) {
    switch (card.value) {
        case "As":
            return 1;
        case "Zwei":
            return 2;
        case "Drei":
            return 3;
        case "Vier":
            return 4;
        case "Fuenf":
            return 5;
        case "Sechs":
            return 6;
        case "Sieben":
            return 7;
        case "Acht":
            return 8;
        case "Neun":
            return 9;
        default:
            return 10;
    }
}

function checkForEndOfGame() {
    updateScore();
    if(gameOver) {
        // let dealer take cards
        while(dealerScore <= playerScore
        && playerScore <= 21
        && dealerScore <= 21) {
            dealerCards.push(getNextCard(deck));
            updateScore();
        }
    }

    if(playerScore > 21) {
        playerWon = false;
        gameOver = true;
    } else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    } else if(gameOver) {
        if(playerScore > dealerScore) {
            playerWon = true;
        } else {
            playerWon = false;
        }
    }
}
