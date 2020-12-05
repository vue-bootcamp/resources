const app = Vue.createApp({
  data() {
    return {
      message: "Lorem ipsum dolor sit amet!",
      age: 20,
    };
  },
  methods: {
    ageTest(passedAge) {
      if (passedAge >= 18) {
        return "Reşitsiniz..";
      } else {
        return "Reşit Değilsiniz...";
      }
    },
  },
});

app.mount("#app");
