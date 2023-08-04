<!-- Creating the App component -->
<template>
  <div class="app-container">
    <ButtonComponent text="Click me" />
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
};
</script>

<!-- Styling the App componnet -->
<style scoped>
/* Importing the style file */
@import url("./App.css");
</style>
