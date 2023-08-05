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

  // Returns if the AI cards should be revealed
  getRevealCard: (state) => state.revealCards,
};

// exporting the getters
export default getters;
