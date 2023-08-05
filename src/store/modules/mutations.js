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

  // Adds a card to the players hand
  givePlayerCard: (state) => {
    state.playerCards.push(state.cardList.pop());
  },
};

// Exporting the mutations
export default mutations;
