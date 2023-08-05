<!-- Creating the Modal Component -->
<template>
  <div class="modal-container">
    <div class="body">
      <h2>{{ text }}</h2>
      <div class="button">
        <ButtonComponent @click="startGame" text="Play again" />
        <ButtonComponent text="Quit" />
      </div>
    </div>
  </div>
</template>

<!-- Implementing JS -->
<script>
// Importing vuex helpers
import { mapActions } from "vuex";

// Importing the costume components
import ButtonComponent from "../ButtonComponent/ButtonComponent.vue";

// Exporting the Modal component
export default {
  name: "ModalComponent",
  components: {
    ButtonComponent,
  },
  methods: {
    ...mapActions(["startGame"]),
  },
  props: {
    text: String,
  },
};
</script>

<!-- Styling the Modal component -->
<style scoped>
/* Importing the style file */
@import url("./ModalComponent.css");
</style>
