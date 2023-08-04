// Creating the state object for the game
const state = {
  // State that will tell if the game is being played
  gameStatus: false,
};

// Creating the getters object for the game
const getters = {
  // Returns the game state
  gameActive: (state) => state.gameStatus,
};

// Creating the actions object for the game
const actions = {
  // Action that will start the game
  startGame: ({ commit }) => {
    commit("changeGameState", true);
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
