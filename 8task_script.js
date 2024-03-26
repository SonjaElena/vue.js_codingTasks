Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,

      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    coordinates(event) {
      const deadSpot = event.target.closest(".dead-spot");
      if (deadSpot) {
        this.x = this.prevX;
        this.y = this.prevY;
      } else {
        this.x = event.offsetX;
        this.y = event.offsetY;
        this.prevX = this.x;
        this.prevY = this.y;
      }
    },
    deleteFruit(index) {
      this.fruitBasket.splice(index, 1);
    },
  },
}).mount("#app");
