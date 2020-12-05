const app = Vue.createApp({
  data() {
    return {
      count: 10,
      desc: null,
    };
  },
  methods: {
    alertMe() {
      alert("Click Event..");
    },
    inc(evt) {
      console.log("evt", evt);
      this.count++; // count = count + 1;
      // this.count = this.count + 1;
      this.desc = "Şu an arttırma işlemi yapıldı...";
    },
    dec() {
      this.count--; // this.count = this.count - 1;
      this.desc = "Şu an azaltma işlemi yapıldı...";
    },
    valueChanged(staticValue, otherStaticValue, event) {
      console.log("Value Değişti...", event.target.value);
      this.count = event.target.value;
      // console.log("Event calisti...");
    },
  },
});

app.mount("#app");
