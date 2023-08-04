<!-- Creating the App component -->
<template>
  <div class="app-container">
    <div class="ai-cards">
      <h1 id="title">BlackJack</h1>
    </div>
    <div class="buttons">
      <ButtonComponent @click="start" text="Play" />
    </div>
    <div class="player-cards"></div>
  </div>
</template>

<!-- Implementing JS -->
<script>
// Importing the costume components
import ButtonComponent from "./ButtonComponent/ButtonComponent.vue";

// Exporting the App component
export default {
  name: "App",
  components: {
    ButtonComponent,
  },
  methods: {
    start: () => {
      console.log("start");
    },
  },
};
</script>

<!-- Styling the App componnet -->
<style scoped>
/* Importing the style file */
@import url("./App.css");
</style>
