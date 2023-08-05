<!-- Creating the App component -->
<template>
  <div class="app-container">
    <h1 id="title" v-if="!gameActive">BlackJack</h1>
    <div class="ai-cards" v-else>
      <PlayCard
        v-for="card in getAiCards"
        :key="card.id"
        :color="card.image"
        :icon="card.icon"
        reveal="ai"
      />
    </div>
    <div class="buttons">
      <ButtonComponent v-if="!gameActive" @click="startGame" text="Play" />
      <div class="game-buttons" v-else-if="gameActive && getCanPlayerPlay">
        <ButtonComponent @click="addCard" text="Hit" />
        <ButtonComponent @click="stand" text="Stand" />
      </div>
      <ButtonComponent v-else text="See result" />
    </div>
    <div class="player-cards">
      <PlayCard
        v-for="card in getPlayerCards"
        :key="card.id"
        :color="card.image"
        :icon="card.icon"
        reveal="player"
      />
    </div>
  </div>
</template>

<!-- Implementing JS -->
<script>
import { mapActions, mapGetters } from "vuex";

// Importing the costume components
import ButtonComponent from "./ButtonComponent/ButtonComponent.vue";
import PlayCard from "./PlayCard/PlayCard";

// Exporting the App component
export default {
  name: "App",
  components: {
    ButtonComponent,
    PlayCard,
  },
  methods: {
    ...mapActions(["startGame", "addCard", "stand"]),
  },
  computed: {
    ...mapGetters([
      "gameActive",
      "getPlayerCards",
      "getAiCards",
      "getCanPlayerPlay",
    ]),
  },
};
</script>

<!-- Styling the App componnet -->
<style scoped>
/* Importing the style file */
@import url("./App.css");
</style>
