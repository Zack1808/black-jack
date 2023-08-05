<!-- Creating the card component -->
<template>
  <div class="card">
    <div class="card-element">
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
// Exporting the Card component
export default {
  name: "PlayCard",
  props: ["icon", "color"],
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
