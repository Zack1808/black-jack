// Creating the state object for the game
const state = {
  // State that will tell if the game is being played
  gameStatus: false,

  // State that will contain the list of all cards
  cardList: [],

  // State that will contain the list of the players cards
  playerCards: [],

  // State that will tell if the player stepped over 21
  canPlayerPlay: false,

  // State that will get the players current result
  playersResult: 0,

  // State that contains the AI cards
  aiCards: [],

  // State that will tell if the player stepped over 21
  canAiPlay: false,

  // State that will get the ai current result
  aiResult: 0,

  // State that will determine if the AI shows its cards or not
  revealCards: false,

  // State that will determine if the modal shows
  showModal: false,
};

// Exporting the state
export default state;
