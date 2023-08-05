// Creating the actions object for the game
const actions = {
  // Action that will start the game
  startGame: ({ commit }) => {
    commit("changeGameState", true);
    commit("createDeck");
    commit("givePlayerCard");
    commit("givePlayerCard");
  },

  // Action that will end the game
  endGame: ({ commit }) => {
    commit("changeGameState", false);
  },
};

// Exporting the actions
export default actions;
