const counterComponent = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {},
  template: `
        <div class="row mt-5 border p-5">
            <div class="col text-center">
                <h3>{{ counter }}</h3>
                <button class="btn-primary" @click="counter++">Arttır</button>
            </div>
        </div>
      `,
};

const app = Vue.createApp({
  components: {
    "counter-item": counterComponent,
    CounterItemNew: counterComponent,
  },
  data() {
    return {};
  },
});
// app.component("counter-item", {
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   methods: {},
//   template: `
//     <div class="row mt-5 border p-5">
//         <div class="col text-center">
//             <h3>{{ counter }}</h3>
//             <button class="btn-primary" @click="counter++">Arttır</button>
//         </div>
//     </div>
//   `,
// });

app.mount("#app");
