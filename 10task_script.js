Vue.createApp({
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  },
  computed: {
    rgbvalues() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
  },
  watch: {
    rgbvalues(newVal) {
      document.body.style.backgroundColor = newVal;
    },
  },
}).mount("#app");
