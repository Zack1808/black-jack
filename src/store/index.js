import { createStore } from "vuex";

// Importing the modules
import game from "./modules/game";

// Creating and exporting the store
export default createStore({
  modules: {
    game,
  },
});
