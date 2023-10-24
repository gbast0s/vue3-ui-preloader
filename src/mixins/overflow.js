export default {
  mounted() {
    if (this.disableScrolling) {
      document.body.classList.add("overflowHidden");
    }
  },
  unmounted() {
    if (this.disableScrolling) {
      document.body.classList.remove("overflowHidden");
    }
  }
};
