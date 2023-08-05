// Importing the images
import diamond from "../../images/diamond.svg";
import club from "../../images/club.svg";
import heart from "../../images/heart.svg";
import spade from "../../images/spade.svg";

// Creating the mutations object for the game
const mutations = {
  // Mutates the game status state
  changeGameState: (state, status) => {
    state.gameStatus = status;
  },

  // Clears the hands of both user and the AI
  clearHands: (state) => {
    state.playerCards = [];
    state.aiCards = [];
  },

  // Creates the card list
  createDeck: (state) => {
    const colors = [heart, spade, club, diamond];
    const cards = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const cardList = [];
    for (let i = 0; i < colors.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        cardList.push({ id: `${i}${j}`, image: colors[i], icon: cards[j] });
      }
    }
    state.cardList = cardList.sort(() => Math.random() - 0.5);
  },

  // Checks if the score is 21 or over
  checkIfPlayerCanPlay: (state, player) => {
    const data = new Object({
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 10,
      Q: 10,
      K: 10,
      A: 11,
    });
    let playerCards;
    player === "ai"
      ? (playerCards = state.aiCards)
      : (playerCards = state.playerCards);
    let result = 0;
    let hasAce = 0;
    for (let i = 0; i < playerCards.length; i++) {
      result += data[playerCards[i].icon];
    }
    for (let i = 0; i < playerCards.length; i++) {
      if (playerCards[i].icon === "A") {
        hasAce++;
        break;
      }
    }
    if (hasAce > 0 && result > 21) result -= 10;
    if (hasAce > 1 && result > 21) result -= 10;
    if (hasAce > 2 && result > 21) result -= 10;
    if (hasAce > 3 && result > 21) result -= 10;
    if (player === "ai") {
      state.canAiPlay = result < 21;
      state.aiResult = result;
    } else {
      state.canPlayerPlay = result < 21;
      if (result >= 21) {
        state.revealCards = true;
      }
      state.playersResult = result;
    }
  },

  // Function that will set the player to a non-playing mode
  stopPlaying: (state, player) => {
    if (player === "ai") {
      state.canAiPlay = false;
    } else {
      state.canPlayerPlay = false;
      state.revealCards = true;
    }
  },

  // Adds a card to the players hand
  giveCard: (state, player) => {
    player.push(state.cardList.pop());
  },
};

// Exporting the mutations
export default mutations;
