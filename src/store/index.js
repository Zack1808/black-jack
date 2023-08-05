import { createStore } from "vuex";

// Importing the modules
import state from "./modules/state";
import getters from "./modules/getters";
import actions from "./modules/actions";
import mutations from "./modules/mutations";

// Creating and exporting the store
export default createStore({
  modules: {
    game: {
      state,
      getters,
      actions,
      mutations,
    },
  },
});
