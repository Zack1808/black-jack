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

  // Return if the modal should be shown
  getShowModal: (state) => state.showModal,

  // Rerturn the message about if the player won or not
  getMessage: (state) => {
    if (
      state.playersResult === 21 ||
      (state.playersResult < 21 && state.playersResult > state.aiResult) ||
      (state.playersResult < 21 && state.aiResult > 21)
    )
      return "You Win";
    return "You Lose";
  },
};

// exporting the getters
export default getters;
