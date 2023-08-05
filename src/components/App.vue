<!-- Creating the App component -->
<template>
  <div class="app-container">
    <div class="ai-cards">
      <h1 id="title" v-if="!gameActive">BlackJack</h1>
    </div>
    <div class="buttons">
      <ButtonComponent v-if="!gameActive" @click="startGame" text="Play" />
      <ButtonComponent v-if="gameActive" @click="startGame" text="Hit" />
      <ButtonComponent v-if="gameActive" @click="startGame" text="Stand" />
    </div>
    <div class="player-cards">
      <div v-for="card in getPlayerCards" :key="card.id"></div>
    </div>
  </div>
</template>

<!-- Implementing JS -->
<script>
import { mapActions, mapGetters } from "vuex";

// Importing the costume components
import ButtonComponent from "./ButtonComponent/ButtonComponent.vue";

// Exporting the App component
export default {
  name: "App",
  components: {
    ButtonComponent,
  },
  methods: {
    ...mapActions(["startGame"]),
  },
  computed: {
    ...mapGetters(["gameActive", "getPlayerCards"]),
  },
};
</script>

<!-- Styling the App componnet -->
<style scoped>
/* Importing the style file */
@import url("./App.css");
</style>
