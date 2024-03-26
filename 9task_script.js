Vue.createApp({
  data() {
    return {
      dayTime: "Good morning",
      title: "Good morning",
      isLightOn: true,
      color: "#00A5BA",
    };
  },
  methods: {
    darklightSwitch(event) {
      this.isLightOn = !this.isLightOn;
      document.title = this.title;

      if (this.isLightOn) {
        this.dayTime = "Good Morning";
        this.title = "Good Morning";
        document.body.style.backgroundColor = "white";
      } else {
        this.dayTime = "Good Night";
        this.title = "Good Night";
        document.body.style.backgroundColor = "black";
      }
    },
  },
}).mount("#app");
