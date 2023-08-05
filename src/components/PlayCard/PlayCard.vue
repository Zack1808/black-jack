<!-- Creating the card component -->
<template>
  <div class="card">
    <div class="card-element" :class="{ hide: hideElement }">
      <div class="top">
        <span>{{ icon }}</span>
        <img :src="color" alt="" />
      </div>
      <div class="middle">
        <img .src="color" alt="" />
      </div>
      <div class="bottom">
        <span>{{ icon }}</span>
        <img :src="color" alt="" />
      </div>
    </div>
  </div>
</template>

<!-- Implementing JS -->
<script>
// Importing vuex helpers
import { mapGetters } from "vuex";

// Exporting the Card component
export default {
  name: "PlayCard",
  props: ["icon", "color", "reveal"],
  computed: {
    ...mapGetters(["getRevealCard"]),
    hideElement() {
      return this.reveal === "ai" && !this.getRevealCard;
    },
  },
};
</script>

<!-- Styling the component -->
<style scoped>
/* Importing the style file */
@import url("./PlayCard.css");
.cards {
  --width: width;
}
</style>
