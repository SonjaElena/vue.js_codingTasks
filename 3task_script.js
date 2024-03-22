Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
      computed: {
        headlineAsId() {
          // Replace invalid characters with dashes and convert to lowercase
          return this.headline.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
        },
      },
    };
  },
}).mount("#app");
