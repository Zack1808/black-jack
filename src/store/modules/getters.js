// Creating the getters object for the game
const getters = {
  // Returns the game state
  gameActive: (state) => state.gameStatus,

  // Returns the amount of cards left
  getCardAmount: (state) => state.cardList.length,

  // Returns the players cards
  getPlayerCards: (state) => state.playerCards,
};

// exporting the getters
export default getters;
