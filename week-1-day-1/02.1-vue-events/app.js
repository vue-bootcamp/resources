const app = Vue.createApp({
  data() {
    return {
      searchValue: "333",
    };
  },
  methods: {
    valueChanged(evt) {
      // if (evt.key === "Enter") {
      alert(evt.target.value);
      // console.log("basildi...", evt.target.value);
      // }
    },
  },
});

app.mount("#app");
