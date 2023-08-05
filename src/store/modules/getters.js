// Creating the getters object for the game
const getters = {
  // Returns the game state
  gameActive: (state) => state.gameStatus,

  // Returns the amount of cards left
  getCardAmount: (state) => state.cardList.length,

  // Returns the players cards
  getPlayerCards: (state) => state.playerCards,

  // Getting the players total
  getCanPlayerPlay: (state) => state.canPlayerPlay,

  // Returns the AI cards
  getAiCards: (state) => state.aiCards,
};

// exporting the getters
export default getters;
