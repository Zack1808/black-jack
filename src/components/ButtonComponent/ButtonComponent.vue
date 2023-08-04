<!-- Creating the button component -->
<template>
  <button @click="handleClick">{{ text }}</button>
</template>

<!-- Implementing JS -->
<script>
// Exporting the Button component
export default {
  name: "ButtonComponent",
  props: {
    text: String,
  },
  methods: {
    handleClick: () => {
      console.log("clicked");
    },
  },
};
</script>

<!-- Styling the Button component -->
<style scoped>
/* Importing the style file */
@import url("./ButtonComponent.css");
</style>
