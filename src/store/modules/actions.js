// Creating the actions object for the game
const actions = {
  // Action that will start the game
  startGame: ({ commit, rootState }) => {
    commit("changeGameState", true);
    if (rootState.game.showModal) commit("revealModal");
    commit("clearHands");
    commit("createDeck");
    commit("giveCard", rootState.game.playerCards);
    commit("giveCard", rootState.game.aiCards);
    commit("giveCard", rootState.game.playerCards);
    commit("giveCard", rootState.game.aiCards);
    commit("checkIfPlayerCanPlay", "player");
    commit("checkIfPlayerCanPlay", "ai");
    console.log(rootState.game.revealCards);
  },

  // Action that will add a card
  addCard: ({ commit, rootState }) => {
    commit("giveCard", rootState.game.playerCards);
    if (rootState.game.canAiPlay) {
      commit("giveCard", rootState.game.aiCards);
    }
    commit("checkIfPlayerCanPlay", "player");
    commit("checkIfPlayerCanPlay", "ai");
  },

  // Function that will stop the player from making further moves
  stand: ({ commit, rootState }) => {
    commit("stopPlaying", "player");
    while (rootState.game.canAiPlay) {
      if (rootState.game.aiResult >= rootState.game.playersResult) {
        commit("stopPlaying", "ai");
        break;
      } else if (rootState.game.aiResult > 21) {
        commit("stopPlaying", "ai");
        break;
      } else {
        commit("giveCard", rootState.game.aiCards);
        commit("checkIfPlayerCanPlay", "ai");
      }
    }
  },

  displayVictory: ({ commit }) => {
    commit("revealModal");
  },

  // Action that will end the game
  endGame: ({ commit }) => {
    commit("clearHands");
    commit("changeGameState", false);
  },
};

// Exporting the actions
export default actions;
