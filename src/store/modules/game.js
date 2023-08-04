import diamond from "../../images/diamond.svg";
import club from "../../images/club.svg";
import heart from "../../images/heart.svg";
import spade from "../../images/spade.svg";

// Creating the state object for the game
const state = {
  // State that will tell if the game is being played
  gameStatus: false,

  // State that will contain the list of all cards
  cardList: [],
};

// Creating the getters object for the game
const getters = {
  // Returns the game state
  gameActive: (state) => state.gameStatus,

  // Returns the amount of cards left
  getCardAmount: (state) => state.cardList.length,
};

// Creating the actions object for the game
const actions = {
  // Action that will start the game
  startGame: ({ commit }) => {
    commit("changeGameState", true);
    commit("createDeck");
  },

  // Action that will end the game
  endGame: ({ commit }) => {
    commit("changeGameState", false);
  },
};

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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
